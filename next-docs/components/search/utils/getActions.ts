import { useRouter } from 'next/router';
import component from '../../components';
import navigation from '../../sidebar/navigation';

export type Action = {
  id: string;
  name: string;
  perform: () => Promise<boolean>;
  section?: string;
};
const getAction = () => {
  const router = useRouter();
  let actions: Action[] = [
    {
      id: 'homepage',
      name: 'Homepage',
      perform: () => router.push('/'),
    },
  ];

  const mapNavigation = (tree: any[], parent?: string) => {
    for (const elem of tree) {
      const section = parent || '';
      const action = {
        id: section ? `${section}/${elem.name}` : elem.name,
        name: elem.name,
        perform: parent === 'components'
          ? () => router.push(`${section}/${elem.name.toLowerCase()}`)
          : () => router.push(elem.href),
      };
      if (section) {
        actions.push({ ...action, section: section });
      } else {
        actions.push(action);
      }
    }
  };

  const components = [...component];
  mapNavigation(navigation);
  mapNavigation(components, 'components');

  return actions;
};

export default getAction;
