import { useState, useCallback } from 'react';
import { Snackbar, Button } from '@heathmont/moon-core-tw';

type NotificationType = {
  message: string;
  type: string;
};

type QueueType = [
  list: NotificationType[],
  options: {
    dequeue: () => NotificationType | undefined;
    enqueue: (item: NotificationType) => number;
    length: number;
    peek: () => NotificationType | undefined;
  }
];

const useQueueState = (initialList: NotificationType[]): QueueType => {
  const [list, setList] = useState<NotificationType[]>([...initialList]);
  const enqueue = useCallback(
    (item: NotificationType) => {
      const newList = [...list, item];
      setList(newList);
      return newList.length;
    },
    [list]
  );

  const dequeue = useCallback(() => {
    if (list.length > 0) {
      const firstItem = list[0];
      setList([...list.slice(1)]);
      return firstItem;
    }
    return undefined;
  }, [list]);

  const peek = useCallback(() => {
    if (list.length > 0) {
      return list[0];
    }
    return undefined;
  }, [list]);

  const options = {
    dequeue,
    enqueue,
    length: list.length,
    peek,
  };

  return [list, options];
};

const delay = (delayMs: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayMs);
  });

const Example = () => {
  const [list, options] = useQueueState([] as NotificationType[]);
  const [isAnimated, setIsAnimated] = useState(false);
  const onOpenChange = async () => {
    setIsAnimated(true);
    await delay(100);
    setIsAnimated(false);
    options.dequeue();
  };
  const openSnackbarHandler = useCallback(
    (notification: NotificationType) => {
      options.enqueue(notification);
    },
    [list]
  );
  const isOpen = options?.length && !isAnimated;
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() =>
          openSnackbarHandler({
            message: `Number ${options.length + 1} Snackbar`,
            type: 'info',
          })
        }
      >
        Queue Snackbar
      </Button>
      <Snackbar isOpen={isOpen} onOpenChange={onOpenChange}>
        <Snackbar.Message>{options?.peek()?.message}</Snackbar.Message>
        <Snackbar.Close />
      </Snackbar>
    </div>
  );
};

export default Example;
