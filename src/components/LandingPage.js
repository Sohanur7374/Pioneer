import React from 'react';

const LandingPage = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://picsum.photos/1920/1080" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h4>A picture is worth thousand words </h4>
                <p>Lorem  minus ab consequuntur repellendus architecto delectus aspernatur!adipisicing elit. Quod explicabo dolorum temporam.</p>
                <button>View Gallery</button>
              </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://picsum.photos/1365" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
                <h4>Say something Please answerme</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo dolorum temporam.</p>
                <button>More Info</button>
              </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://picsum.photos/1280" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
                <h4>Say something Please answerme</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo dolorum temporam.</p>
                <button>Contact </button>
              </div>
          </div>        
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      
      
      <section id="about" className="bg-light py-5  height-800">
        <div className="container-fluid">
          <div className="row">
        
           <div className="col-md-6 about-picture  d-flex " style={{minHeight:'600px'}} >            
            <div className="col-sm-2 col-md-4 my-3 d-flex flex-column justify-content-start "><img src="https://picsum.photos/500" alt="demo" className="img-fluid rounded"/></div>
            <div className="col-sm-2 col-md-4 my-3 d-flex flex-column justify-content-center" ><img src="https://picsum.photos/500" alt="demo" className="img-fluid rounded" /></div>
            <div className="col-sm-2 col-md-4 my-3 d-flex flex-column justify-content-end" ><img src="https://picsum.photos/500" alt="demo" className="img-fluid rounded" /></div>
           </div>
  
           <div className="col-md-6 about-text height-800 px-5 d-flex align-items-center justify-content-center">
             <div className="about-text-center">             
         
            <div className="row">
                <div className="col text-center">
                <h1 className="display-4 text-uppercase text-dark mb-0"><strong>about</strong></h1>
                <div className="title-underline bg-warning"></div>
                <p className="mt-5 pt-5 px-5 text-left text-capitalize text-dark">Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Laborum placeat blanditiis rerum enim, aut quaerat corporis laudantium. Perferendis cumque odit, ab nostrum totam eligendi illum debitis corrupti magni numquam,
                    adipisci ratione? Blanditiis  nostrum dicta at Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, expedita sunt. Asperiores mollitia dolorem, vitae eligendi quo a vel sint similique necessitatibus unde est sunt ratione nisi repellat reprehenderit quas perferendis dignissimos rerum voluptatem adipisci harum dolore laborum deleniti dolores. Provident, magnam blanditiis itaque 
                    ullam aspernatur molestias eaque ad odit sapiente modi minus eos dolor eum cumque. Minus, impedit saepe.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore iste iure officia numquam possimus vitae reprehenderit aperiam harum veniam!
                </p>
                </div>
            </div>
               
           </div>
           </div>  
          </div> 
          </div>             
        </section>
        </div>
    );
};

export default LandingPage;
