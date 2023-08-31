import React from 'react';
import Swal from 'sweetalert2';

const AddRoom = () => {
    const handleForm = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const location = form.location.value;
        const date = form.date.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);

        const roomInfo = {
            name: name,
            image: image,
            location: location,
            date: date,
            rating: rating,
            category: category,
            price: price
        }
        // fetch and add data to mongodb
        fetch('http://localhost:9988/add-room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roomInfo)
        })
        form.reset();
        Swal.fire(
            'Room Added!',
            'You clicked the button!',
            'success'
          )
    }
    return (
        <div className='max-w-screen-md mx-auto'>
            <form onSubmit={handleForm}>
                <div className='grid grid-cols-2 gap-4 justify-between items-center py-4'>
                    <input type="text" name="name" placeholder='Type Name' className='details-field' />
                    <input type="text" name="image" placeholder='Paste Img Url' className='details-field' />
                    <input type="text" name="location" placeholder='Type Location' className='details-field' />
                    <input type="date" name="date" placeholder='Select Date' className='details-field' />
                    <input type="text" name="rating" placeholder='Set Rating' className='details-field' />
                    <input type="text" name="price" placeholder='Set Price' className='details-field' />
                    <input type="text" name="category" placeholder='Category' className='details-field' />
                    <input type='submit' className='details-field border-green-500 hover:bg-sky-300' />
                </div>
            </form>
        </div>
    );
};

export default AddRoom;