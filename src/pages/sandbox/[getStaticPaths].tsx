// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    getStaticPaths: string
}

export const getStaticPaths: GetStaticPaths = async () => { //getStaticPaths also called Dynamic Routing
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    const paths = data.map((user: any) => {
        // console.log("inside paths variable: ", user);
        // console.log("USER ID:", user.id);
        return { params: { getStaticPaths: user.id.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

//Usefull link: https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
export const getStaticProps: GetStaticProps = async (context) => {
    const { getStaticPaths } = context.params as IParams;
    const id = getStaticPaths;
    const res = await  fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

export default function getStaticPathsSample({user}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h1>DETAILS</h1>
            <h2>getStaticPaths with getStaticProps Sample Code</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street} {user.address.suite} {user.address.city}</p>
        </>
    )
}