// import './Advert.css';
import React from 'react';


export const Review = () => {
    const initialList = [
        {
          id: 'a',
          name: 'Robin',
        },
        {
          id: 'b',
          name: 'Dennis',
        },
      ];
    const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState('');

    function handleChange(event) {
        event.preventDefault();
        setName(event.target.value);
    }
    function handleAdd(event) {
        event.preventDefault();
        const newList = list.concat({ name });
    
        setList(newList);
    }

    // const [username, setUsername] = React.useState('');
    // const [userReview, setUserReview] = React.useState('');

    // const reviews=[
    //     {id:1,name:'CS',Review:'Good Services'},
    //     {id:2,name:'CS',Review:'Good Services'}
    //     ];

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(username,userReview)
        
    //     reviews.concat(...reviews,{id:1,name:username,Review:userReview})

    // }

  return (
    <div className='container'>
        <div>Feedback from Customers</div>
        
        { list.map((num) =>
        <div key={num.id}>
            <p>{num.name}  Reviews-{num.Review}</p>
        </div>
        )} <br/>


        <div><b>Share your Feedback</b></div>
        <form className='ui form' onSubmit={handleAdd}>
            <div className='field'>
                <label>Name <p1>*</p1></label>
                        <input type='text' name='name' placeholder='Full Name' value={name}
                        onChange={handleChange}
                        requied></input>
            </div>

            {/* <div className='field'>
                <label>Review <p1>*</p1></label>
                    <input type='text' name='user_review' id='review'  value={userReview}
                            maxLength='200' onChange={(event) => setUserReview(event.target.value)}
                             placeholder='Review' requied></input>
            </div> */}

            <div className='imageWP'>
                <button size='small' centered >Submit Review</button>
            </div>
        </form>
    </div>
    
  )
}