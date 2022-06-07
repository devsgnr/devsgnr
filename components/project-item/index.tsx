import Link from 'next/link';
import React, { FC } from 'react';
import { IProjectProps } from '../../types/project';

interface ProjectComponentProps {
  data: IProjectProps;
}

const Project: FC<ProjectComponentProps> = ({
  data,
}: ProjectComponentProps) => (
  <Link href={data.slug && data.slug}>
    <div />
  </Link>
);

export default Project;
