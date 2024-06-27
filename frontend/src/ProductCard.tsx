import {Product} from "./Product";

type Props = {
    product: Product,

}

export default function ProductCard(props: Props) {
    return (
        <div className="product-card">
            {props.product.name}
            {props.product.category}
            {props.product.price}
            {props.product.id}
        </div>
    );
}
