import { useEffect, useState } from 'react';


interface count {

}
interface CategoryByCount {
    count: Array<number>
    category: Array<String>

}

const useCategoryCounts = (data: any): CategoryByCount => {
    const [category, setCategory] = useState<String[]>([]);
    const [count, setCount] = useState<number[]>([]);


    useEffect(() => {
        const getCategoryCounts = () => {
            const counts: { [category: string]: number } = {};
            data.forEach((item: any) => {
                const { category } = item;
                counts[category] = (counts[category] || 0) + 1;
            });
            let catArray: Array<string> = [];
            let countArray: Array<number> = []
            Object.entries(counts).forEach(([category, count]) => {
                catArray.push(category)
                countArray.push(count)

            }
            );

            setCategory(catArray);
            setCount(countArray);

        };

        getCategoryCounts();
    }, [data]);

    return { count, category };
};

export default useCategoryCounts;
