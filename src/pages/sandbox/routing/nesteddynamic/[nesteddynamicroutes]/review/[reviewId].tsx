// this is one of the next hooks , to access the router feature like
// 1.router.push(href)
// 2.router.query.productId
import { useRouter } from "next/router"; 
 
export default function Review() {
    const router = useRouter();
    const { nesteddynamicroutes, reviewId } = router.query; // reviewId is the dynamic route name
    // console.log(reviewId);
    return (
        <>
            <h1>Dynamic Routing nestedDynamicRoutes::{nesteddynamicroutes} reviewId::{ reviewId }</h1>
        </>
    )
}

// NOTE: http://localhost:3000/sandbox/nesteddynamic/100/review/2 to add this file