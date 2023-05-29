import { useEffect, useState } from 'react';

interface Product {
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    thumbnail: string;
}

const useProductData = (data: any): Product[] => {
    const [productData, setProductData] = useState<Product[]>([]);

    useEffect(() => {
        setProductData(data.map((product: any) => {
            const {
                description,
                price,
                category,
                brand,
                stock,
                thumbnail,
            } = product;
            return {
                description,
                price,
                category,
                brand,
                stock,
                thumbnail,
            };
        }));
    }, [data]);

    return productData;
};

export default useProductData;
