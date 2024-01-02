import Cards from './Cards';
function Tours({tours,removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Shivang</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Cards key={tour.id} {...tour} removeTour={removeTour}></Cards>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;