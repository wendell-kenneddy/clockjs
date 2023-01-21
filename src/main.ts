import './styles/globals.css';
import dayjs from 'dayjs';

const clockContainer = document.getElementById('clock') as HTMLHeadingElement;

function getTime(): string {
  const now = new Date();
  return dayjs(now).format('HH:mm:ss');
}

function renderCurrentTime(time: string): void {
  clockContainer.innerText = time;
}

setInterval(() => {
  renderCurrentTime(getTime());
}, 1000);
