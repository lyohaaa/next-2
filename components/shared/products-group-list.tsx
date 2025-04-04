import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { cn } from '@/lib/utils';

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;

}

export const ProductsGroupList: React.FC<Props> = ({ 
    title,
    items,
    listClassName,
    categoryId,
    className
 }) => {
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return <div className={className} id={title}>
        <Title text={title} size="lg" className="font-extrabold mb-5" />

        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {items 
                    .map((product, i) => (
                        <ProductCard
                        key = {product.id}
                        id = {product.id}
                        name = {product.name}
                        imageUrl = {product. imageUrl}
                        price = {product.items[0].price}
                        />
                    ))}
        </div>
    </div>
};