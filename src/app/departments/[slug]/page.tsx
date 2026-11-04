import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEPARTMENTS } from '@/data/departments';
import DepartmentView from '@/components/departments/DepartmentView';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    return {
      title: 'Department Not Found | University of Swat',
    };
  }

  return {
    title: `${dept.name} | University of Swat`,
    description: dept.shortDescription,
    keywords: [
      dept.name,
      dept.faculty,
      ...dept.degreesOffered,
      'University of Swat',
      'Charbagh',
    ],
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const department = DEPARTMENTS.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  return <DepartmentView department={department} />;
}

