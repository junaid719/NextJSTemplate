import { useEffect, useState } from 'react';

interface Product {
    rating: number;
    title: string;
}

const useProductData = (data: any): Product[] => {
    const [productData, setProductData] = useState<Product[]>([]);

    useEffect(() => {
        setProductData(data.map((product: any) => {
            const {
                rating,
                title,

            } = product;
            return {
                rating,
                title,
            };
        }));
    }, [data]);

    return productData;
};

export default useProductData;
