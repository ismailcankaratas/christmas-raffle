import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps extends NextSeoProps {
    path: string;
}
export default function ({ title, description, path }: SeoProps) {
    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${path}`,
                title,
                description,
            }}
        />
    )
}