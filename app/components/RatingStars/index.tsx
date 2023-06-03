import React, { useContext } from "react"
import { Context } from '../../context/context'
import RatingStar from "./Rating"
import useCustomRatingData from '@/app/hooks/useCustomRatingData';
const Container = (): JSX.Element => {
    console.log('HERE is the data 10', useContext(Context))
    const ratings = useCustomRatingData(useContext(Context))
    const products = useContext(Context)
    return <><div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">{ratings.map((e, i) => <RatingStar key={i} name={e.title} value={e.rating} />)}
        </div>
    </div></>
}
export default Container;