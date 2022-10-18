const { processFile } = require('figma-transformer');
const { identity, filter, pipe, prop, head, map, replace } = require('ramda');

const filterByPage = (pageFilter) => (data) => {
  const pagesList = data.shortcuts.pages;

  if (typeof pageFilter === 'string') {
    return filter((page) => page.name === pageFilter)(pagesList);
  }

  return filter(pageFilter)(pagesList);
};

const filterByPageId = (pageFilter) => (data) => {
  const pagesList = data.shortcuts.pages;

  if (typeof pageFilter === 'string') {
    return filter((page) => page.id === pageFilter)(pagesList);
  }
  return filter(pageFilter)(pagesList);
};

const filterOutlinedComponents = filter(
  (component) => !component.name.includes('Type=Outline')
);

/*
  renames figma icons, e.g:
  BEFORE: "Time=stopwatch-timer, Type=Stroke"
  AFTER:  "TimeStopwatchTimer"
*/
const rename = (name) => {
  // remove ", Type=Stroke" part
  const trimmedType = head(name.split(', '));
  // toUpperCase
  // "Time=stopwatch-timer" -> "Time=Stopwatch-Timer"
  const upperCased = replace(
    /(^|=|-|\(|\s)(\S)/g,
    (s) => s.toUpperCase(),
    trimmedType
  );
  // toUpperCase after "(" parentheses
  // Type="Hand (pointing)" -> "Type="Hand (Pointing)"
  const upperCasedParentheses = replace(
    /(^|\()(\S)/g,
    (s) => s.toUpperCase(),
    upperCased
  );
  // get rid of "=", "-", ":" etc
  // "Time=Stopwatch-Timer" -> "TimeStopwatchTimer"
  const trimmed = replace(/=|-|:|\(|\)|\s/g, '', upperCasedParentheses);
  return trimmed;
};

const getSvgDataFromImageData = (svgsUrls) => (node) => {
  return { id: node.id, url: svgsUrls[node.id], name: rename(node.name) };
};

const getSvgs =
  (client) =>
  async ({ fileId, page, pageId }) => {
    console.log('Getting Figma Icons file.');

    const fileData = await client.file(fileId);
    console.log('Processing Figma Icons file.');

    const processedFile = processFile(fileData.data, fileId);

    const fileLastModified = fileData.data.lastModified;
    console.log('Figma Icons file last modified was: ', fileLastModified);

    const optionallyFilterByPages = pageId
      ? filterByPageId(pageId) : page
        ? filterByPage(page) : identity;

    const componentsData = pipe(
      optionallyFilterByPages,
      head,
      prop('shortcuts'),
      prop('components'),
      filterOutlinedComponents
    )(processedFile);

    const svgsIds = map(prop('id'))(componentsData);

    const svgsExportResponse = await client.fileImages(fileId, {
      format: 'svg',
      ids: svgsIds,
    });

    const svgsUrls = svgsExportResponse.data.images;

    return map(getSvgDataFromImageData(svgsUrls))(componentsData);
  };

exports.getSvgs = getSvgs;
