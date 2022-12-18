import { DefaultSeo as NextDefaultSeo } from 'next-seo';

export default function DefaultSeo() {
    const title = "Gedik Yeni Yıl | İnovasyon Kulübü";
    return (
        <NextDefaultSeo
            title={title}
            titleTemplate={`${title} | %s`}
            defaultTitle={title}
            canonical=""
            openGraph={{
                type: 'website',
                locale: 'tr',
                site_name: title,
            }}
            additionalMetaTags={[
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1 maximum-scale=1',
                },
                {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes',
                },
                {
                    name: 'theme-color',
                    content: '#3e1c33',
                },
            ]}
        />
    )
}