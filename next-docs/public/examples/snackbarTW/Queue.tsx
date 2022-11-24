import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState, useCallback } from 'react';

type NotificationType = {
  message: string;
  type: string;
};

function useQueueState<NotificationType>(initialList: NotificationType[]): [
  NotificationType[],
  {
    dequeue: () => NotificationType;
    enqueue: (item: NotificationType) => number;
    length: number;
    peek: () => NotificationType;
  }
] {
  const [list, setList] = useState<NotificationType[]>([...initialList]);
  const enqueue = useCallback(
    (item: NortificationType) => {
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

  const notifications = {
    dequeue,
    enqueue,
    length: list.length,
    peek,
  };

  return [list, notifications];
}

 
const Example = () => {
  const [notificationList, notifications] = useQueueState([]);
  const [isOpen, setIsOpen] = useState(false)
  const onOpenChange = () => {
  setIsOpen(false) 
  if(notifications.length > 1){
    setTimeout(() => {
      setIsOpen(true)
      notifications.dequeue()
    }, 400);
  }else {
    notifications.dequeue()
  } 
  }
  const openSnackbarHandler = useCallback(
    (notification: NotificationType) => {
      setIsOpen(true)
      notifications.enqueue(notification)
    },
    [notificationList]
  );

  return (
    <div>
      <Button onClick={() => openSnackbarHandler({message: `'Something went wrong ...' + ${Math.random()}`, type: 'info'})}>
        Queue Snackbar
      </Button>
      <Snackbar isOpen={isOpen} onOpenChange={onOpenChange}>
        <Snackbar.Message>{notifications?.peek()?.message}</Snackbar.Message>
        <Snackbar.Close />
      </Snackbar>
    </div>
  );
};

export default Example;
