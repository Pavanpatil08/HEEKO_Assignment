import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      {/* Nav Bar Section */}
      <div class="d-none d-xl-block">
      <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-white rounded">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img class="ml-5" src="Group 4.svg" alt="image cap"/>
            <ul class="navbar-nav offset-4 mt-2 mt-lg-0">
              <form class="form-inline p-2 ">
                <input class="form-control p-4 bg-light font-Gilroy" style={{width:"800px", marginLeft:"-300px"}} type="text" name="search" placeholder="Search Something" aria-label="Search"/>
              </form>
            </ul>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style={{marginLeft:"300px"}}>
              <button class="btn btn-lg btn-outline-success font-Gilroy">Sign In</button>
              <button class="btn btn-lg btn-success ml-5 font-Gilroy">Sign Up</button>
            </ul>
        </div>
      </nav>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3">
          <div class="d-flex">
            <h3 class="mt-5 ml-5 font-weight-bold font-Gilroy">Filter</h3>
            <h4 class="offset-6 mt-5 float-left" style={{color:"#00B16E",family:"Gilroy"}}>Clear</h4>
          </div>
            <hr class="mt-2 ml-5" />
          <div class="pt-4 ml-5">
            <h4 style={{family:"Gilroy"}}>Price</h4>
              <div class="d-flex">
                <select class="form-control text-muted font-Gilroy">
                  <option>$Min</option>
                </select>
                <select class="form-control text-muted ml-1 font-Gilroy">
                  <option>$Max</option>
                </select>
              </div>
          </div>

          <div class="pt-4 mt-3 ml-5">
            <h4 style={{family:"Gilroy"}}>Location(USA)</h4>
            <hr class="mt-4" />
              <form>
                <label class="container font-Gilroy">West
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container font-Gilroy">Midwest
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container font-Gilroy">Southeast
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container font-Gilroy">Northeast
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container font-Gilroy">Southwest
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </form>
          </div>

          <div class="pt-4 ml-5 mt-3">
            <h4 style={{family:"Gilroy"}}>MSRP Percent Off</h4>
              <hr class="mt-2" />
                <form>
                  <label class="container">0-20%
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">20-50%
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">50-80%
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </form>
          </div>

          <div class="pt-4 ml-5 mt-3 font-Gilroy">
            <h4 style={{family:"Gilroy"}}>CONDITION</h4>
              <hr class="mt-4" />
                <form class="font-Gilroy">
                  <label class="container">New
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Like New
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Unispected Returns
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Used
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Salvage
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">Mixed
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </form>
            </div>
        </div>
       
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="d-flex pt-4 font-Gilroy row">
            <div class="col-sm-6 col-md-6 col-lg-2">
              <button type="button" class="btn btn-light text-#FFFFFF rounded-pill mt-4 ml-5 text-center"><h4>Everything</h4></button>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <button type="button" class="btn btn-light rounded-pill mt-4 text-center"><h4>Live Auction</h4></button>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <button type="button" class="btn btn-light rounded-pill mt-4  text-center" ><h4>Eligible for auction</h4></button>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-2">
              <button type="button" class="btn btn-light rounded-pill mt-4  text-center"><h4>Buy now only</h4></button>
            </div>
            <div class="d-flex offset-1 mt-4 mr-5 ">
              <h4 class="w-100">Sort By:</h4>
                <div class="dropdown">
                  <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                    Lowest Price
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                  </div>
                </div>
            </div>
          </div>
          <div class="card-deck mt-5 ml-4 mr-5">
            <div class="card">
              <img src="Top cap .png" class="card-img-top" alt="..." />
                 <div class="card-body font-Gilroy">
                      <div class="d-flex justify-content-between">
                        <div class="alert alert-success" role="alert"><i class="fas fa-circle Circle  mr-2"></i>
                           LIVE AUCTION
                        </div>
                        <h5 class="ml-5 mt-3 text-info">3 days left</h5>
                      </div>
                      <h5 class="pt-4" style={{color:"#0A1F44"}}>Original iPhone Boxes By Apple </h5>
                      <h5 class="mt-2" style={{color:"#0A1F44"}}>Liquidation Lot</h5>
                      <hr class="mt-2" />
                      <div class="d-flex">
                        <div class="row">
                          <h4 class="col-12" style={{color:"#0A1F44"}}>$200</h4>
                          <p class="col-12 text-muted">Current Bid</p>
                        </div>
                        <div class="row">
                          <h4 class="col-12" style={{color:"#0A1F44"}}><del>$500</del></h4>
                          <p class="col-12 text-muted">MSRp</p>
                        </div>
                        <div class="row">
                          <h4 class="col-12" style={{color:"#0A1F44"}}>20</h4>
                          <p class="col-12 text-muted" >Units</p>
                        </div>
                  </div>
                  <div class="d-flex justify-content-between mt-4"> 
                    <button class="btn btn-lg text-light w-50" style={{backgroundColor:"#00B16E"}}>Live Auction</button>
                    <button class="btn btn-lg bg-light offset-2 w-50 ml-4">Watch<i class="fa fa-star-o checked ml-3"></i></button>
                  </div>
              </div>
          </div>
          <div class="card">
            <img src="Top cap  (1).png" class="card-img-top" alt="..." />
              <div class="card-body font-Gilroy">
                <div class="d-flex justify-content-between">
                  <div class="alert alert-warning text-dark" role="alert">
                    ELIGIBLE FOR AUCTION
                  </div>
                </div>
                  <h5 class="pt-4" style={{color:"#0A1F44"}}>2 Players RC Battles Boxing Robots by </h5>
                  <h5 class="mt-2" style={{color:"#0A1F44"}}>Shift3</h5>
                  <hr class="mt-2" />
                  <div class="d-flex">
                    <div class="row">
                      <h4 class="col-12" style={{color:"#0A1F44"}}>$1200</h4>
                      <p class="col-12 text-muted">Current Bid</p>
                    </div>
                    <div class="row">
                      <h4 class="col-12" style={{color:"#0A1F44"}}><del>$4000</del></h4>
                      <p class="col-12 text-muted">MSRp</p>
                    </div>
                    <div class="row">
                      <h4 class="col-12" style={{color:"#0A1F44"}}>346</h4>
                      <p class="col-12 text-muted">Units</p>
                    </div>
                  </div>
                  <div class="d-flex mt-4 justify-content-between"> 
                    <button class="btn btn-lg text-light w-50" style={{backgroundColor:"#00B16E"}}>Live Auction</button>
                    <button class="btn btn-lg bg-light offset-2 w-50 ml-4">Watch<i class="fa fa-star-o checked ml-3"></i></button>
                  </div>
              </div>
          </div>
          <div class="card">
            <img src="Top cap  (2).png" class="card-img-top" alt="..." />
              <div class="card-body font-Gilroy">
                <div class="d-flex justify-content-between">
                  <div class="alert alert-info" role="alert">
                    NEWLY LISTED
                  </div>
                </div>
                  <h5 class="pt-4" style={{color:"#0A1F44"}}>Speakers,LED Lights,DVD Players,</h5>
                  <h5 class="mt-2" style={{color:"#0A1F44"}}>Printers, and More Electronics...</h5>
                  <hr class="mt-2" />
                  <div class="d-flex">
                    <div class="row">
                      <h4 class="col-12">$200</h4>
                      <p class="col-12 text-muted">Current Bid</p>
                    </div>
                    <div class="row">
                      <h4 class="col-12"><del>$500</del></h4>
                      <p class="col-12 text-muted">MSRp</p>
                    </div>
                    <div class="row">
                      <h4 class="col-12">20</h4>
                      <p class="col-12 text-muted">Units</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between mt-4"> 
                    <button class="btn btn-lg btn-primary w-100">SOLD</button>
                  </div>
              </div>
            </div>
        </div>
          
          <div class="mt-5 pt-5 ml-3 mr-5">
            <button class="btn btn-lg ml-4 mr-5 mt-5 btn-outline-success font-Gilroy" style={{width:"98%",height:"90px"}}>Load More</button>
          </div>

        </div>
      </div>
        <div class="jumbotron mt-5 d-none d-xl-block">
          <div class="row mb-5">
            <div class="col-sm-12 col-md-12 col-lg-3">
                <img src="Group 3.svg" class="offset-5"></img>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-9 d-flex">
                <div class="col-sm-12 col-md-12 col-lg-3 font-Gilroy">
                  <h3 class="font-weight-bold">Company</h3>
                  <div class="text-secondary">
                    <h6 class="mt-4">About</h6>
                    <h6 class="mt-4">FAQs</h6>
                    <h6 class="mt-4">Sign Up</h6>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3  font-Gilroy">
                  <h3 class="font-weight-bold">Legal</h3>
                  <div class="text-secondary text-">
                    <h6 class="mt-4">Terms of Use</h6>
                    <h6 class="mt-4">Privacy Policy</h6>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3  font-Gilroy">
                  <h3 class="font-weight-bold">Contact</h3>
                  <div class="text-secondary">
                    <h6 class="mt-4">Contact:contact@anteelo.com</h6>
                    <h6 class="mt-4">Email:support@anteelo.com</h6>
                    <h6 class="mt-4">Join Our Facebook Group:Anteelodesign</h6>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3  font-Gilroy">
                  <h3 class="font-weight-bold">Follow us:</h3>
                  <div class="d-flex mt-3">
                    <img src="Facebook.png" style={{width:"35px", height:"35px"}} class="mr-4"></img>
                    <img src="instagram.png" style={{width:"35px", height:"35px"}} class="mr-4"></img>
                    <img src="twitter.png" style={{width:"35px", height:"35px"}} class="mr-4"></img>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <p class="text-secondary text-center font-Gilroy">@ 2018 INVENTO LOTS</p>
    </div>
  );
}

export default App;
