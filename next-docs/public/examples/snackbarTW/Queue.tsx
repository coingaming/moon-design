import { Snackbar, Button } from '@heathmont/moon-core-tw';
import { useState, useCallback } from 'react';

type NotificationType = {
  message: string;
  type: string;
};

class Queue {
  elements: Record<string, NotificationType>;
  head: number;
  tail: number;
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element: NotificationType) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  get length() { 
    return this.tail - this.head;
  }
}
const notifications = new Queue();
 
const Example = () => {
  const [snackbar, setSnackbar] = useState({message: '', type: ''});

  const snackbarNotification = () => {
    setNotifications(notifications.dequeue());
  }

  const openSnackbarHandler = useCallback(
    (notification: NotificationType) => {  
      setSnackbar(notifications.enqueue(notification));
    },
    [snackbar]
  );

  return (
    <div>
      <Button onClick={() => openSnackbarHandler({message: 'Something went wrong ...', type: 'info'})}>
        Default Snackbar
      </Button>
      <Snackbar isOpen={snackbar?.type === 'info'} setSnackbar={snackbarNotification}>
        <Snackbar.Message>{snackbar?.message}</Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default Example;
