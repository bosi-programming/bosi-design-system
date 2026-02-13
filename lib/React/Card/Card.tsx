import { type ReactNode } from 'react';
import { Typography } from '../Typography';
import { Paper } from '../Paper';

export interface CardProps {
  title: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, content, actions, className }: CardProps) {
  return (
    <Paper
      className={`flex h-[365px] w-full flex-col items-center justify-between rounded-xl px-5 py-6 md:w-[270px] ${className ? className : ''}`}
      data-testid="card"
      isCard
    >
      <Typography color="primary" size="h3">
        {title}
      </Typography>
      <div className="mt-2">{content}</div>
      <div>{actions}</div>
    </Paper>
  );
}
