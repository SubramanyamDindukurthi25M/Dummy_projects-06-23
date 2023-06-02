import { Button } from 'primereact/button'
import {Rating} from 'primereact/rating'

export const Product = ({pro}) => {
    const {
        title,
        image,
        price,
        rating,
        category
    } = pro
    
    const ItemTemplate = () => {
        return (
            <div className="col-8 mx-auto">
                <div className="flex bg-gray-300 flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img 
                        className="w-9 sm:w-16rem xl:w-10rem shadow-2 mx-auto border-round" 
                        src={image} 
                        alt={title} 
                    />

                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-end flex-1 gap-4">
                        <div className="flex flex-column align-items-center gap-3">
                            <div className="text-2xl font-bold text-900">{title}</div>
                            <Rating value={rating.rate} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold capitalize">{category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    return (
        <div className="card">
            <ItemTemplate/>
        </div>
    )
}