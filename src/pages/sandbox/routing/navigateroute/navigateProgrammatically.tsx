import { useRouter } from "next/router";

export default function NavigateRouteProgrammatically() {
    const router = useRouter();
    const handclickRedirect = () => {
        console.log('prepare to redirect');
        
        setTimeout(() => {
            router.push('/sandbox/getStaticPropsSample');
        }, 3000);
    }
    
    return (
        <>
            <h1>NavigateRouteProgrammatically</h1>
            <button onClick={handclickRedirect}>Click Me to redirect</button>
        </>
    )
}