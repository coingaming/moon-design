import { Action } from 'kbar';
import { useRouter } from 'next/router';
import navigation from '../../sidebar/navigation';

const getAction = () => {
  const router = useRouter();
  let actions: Action[] = [
    {
      id: 'homepage',
      name: 'Homepage',
      keywords: 'home',
      perform: () => router.push('/'),
    },
  ];

  const mapNavigation = (tree: any[], parent?: string) => {
    for (const elem of tree) {
      if (elem.href) {
        const section =
          parent
            ?.split('/')
            ?.find((el) => el === 'Styled Components' || el === 'Tailwind') ||
          '';
        const action = {
          id: `${section}${elem.name}`,
          name: elem.name,
          keywords: elem.name.toLowerCase(),
          subtitle: parent as string,
          perform: () => router.push(elem.href),
        };
        if (section) {
          actions.push({ ...action, section: section });
        } else {
          actions.push(action);
        }
      }
      if (elem.children) {
        const parentStr = `${parent ? parent + '/' : ''}${elem.name}`;
        mapNavigation(elem.children, parentStr);
      }
    }
  };

  mapNavigation(navigation);

  return actions;
};

export default getAction;
