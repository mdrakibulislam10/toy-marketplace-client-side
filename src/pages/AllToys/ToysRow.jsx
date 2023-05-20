
const ToysRow = ({ toy }) => {
    const { _id, image, toyName, sellerName, subCategory, price, quantity } = toy;

    return (
        <tr className='border-2'>
            <td>
                <img className="w-20" src={image && image} alt="Avatar" />
            </td>
            <td>
                <div className="font-bold">{sellerName && sellerName}</div>
            </td>

            <td>
                <div className="font-bold">{toyName && toyName}</div>
            </td>

            <td>
                <div className="font-bold">{subCategory && subCategory}</div>
            </td>

            <td>
                <div className="font-bold">${price && price}</div>
            </td>

            <td>
                <div className="font-bold">{quantity && quantity} pcs.</div>
            </td>

            <td>
                <div className="font-bold">
                    <button className="btn">View Details</button>
                </div>
            </td>
        </tr>
    );
};

export default ToysRow;