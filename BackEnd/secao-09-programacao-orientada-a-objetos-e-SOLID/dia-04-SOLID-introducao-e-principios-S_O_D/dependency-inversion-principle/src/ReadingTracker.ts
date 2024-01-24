import EmailNotification from './EmailNotification';
import Notificator from './interfaces/Notificator';

export default class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  notificator: Notificator;

  constructor(readingGoal: number, email: string) {
    this.readingGoal = readingGoal;
    this.notificator = new EmailNotification(email);
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification('Congratulations! You\'ve reached your reading goal!');
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}