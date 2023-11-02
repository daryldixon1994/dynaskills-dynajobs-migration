import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Dynaskills - Upskilling Technologies"}
                </title>
            </Head>
        </>
    )
}

export default PageHead