import React from "react";
import { connect } from "react-redux";
import PaginationList from "react-pagination-list";
import thumsup from "./images/thumb-up.svg";
import thumsdown from "./images/thumb-down.svg";
import Moment from "react-moment";
import bookinglogo from "./images/BOOKINGCOM.svg";
import HOLIDUlogo from "./images/HOLIDU.svg";
import AIRBNBlogo from "./images/AIRBNB.svg";
import bg from "./images/background.png";

const mapStateToProps = (state) => {
  return {
    terms: state.terms,
  };
};

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      sortingData: [],
      dateValue: "",
    };
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
  }
  updateSearch = (e) => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  componentWillReceiveProps(props) {
    this.setState({ sortingData: props.terms });
  }
//Ascending order sorting by score
  sortByPriceAsc() {
    this.setState(this.state.sortingData.sort((a, b) => a.score - b.score));
  }
//Descending order sorting by score
  sortByPriceDesc() {
    this.setState(this.state.sortingData.sort((a, b) => b.score - a.score));
  }

  render() {
    let searcValue = this.state.search;
    console.log(searcValue);
    let message = "";
    //Calling the different messages when page loads and search results is empty
    if (searcValue) {
      message = "No Results found";
    } else {
      message = "Loading...";
    }
    let filteredBooks = this.state.sortingData.filter((term) => {
      return term.channel
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <div className="wholeBody">
        <div className="row pt-4">
          <div className="col-9 offset-3 pt-3 pb-5">
            <div className="row">
              <div className="col-9 intro lineheightLarge pb-3">ID: 091021</div>
            </div>
            <div className="row">
              <div className="intro introBold col-9 lineheightLarge">Le Casa de las Flores</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 offset-2 pl-4 offset-sm-3 pl-sm-2 offset-md-3 pl-md-1 col-md-9 offset-xl-3 pl-xl-4 col-lg-9 pl-lg-0">
            <div className="row pb-4">
              <div className="col-12 col-sm-10 col-md-5 input-group pl-0 pb-3 pb-md-0">
                <input
                  className="post-heading form-control input-sm"
                  type="text"
                  value={this.state.search}
                  onChange={this.updateSearch}
                  placeholder="Search by channel"
                />
              </div>
              <div className="col-sm-12 col-md-4 col-12 btn-group pl-0 pt-mt-0">
                <label
                  className="pt-2 col-md-5 col-sm-2 col-3 pl-0 col-lg-3 col-xl-4 pl-xl-3 labelsort"
                >
                  Sort By Score:&nbsp;
                </label>
                <button
                  onClick={this.sortByPriceAsc}
                  className="btn btn-light btn-sm col-6 col-sm-3 col-md-4 ml-0 ml-sm-2 col-xl-1"
                >
                  &#8593;
                </button>
                <button
                  onClick={this.sortByPriceDesc}
                  className="btn btn-light btn-sm col-6 col-sm-4  col-md-4 col-xl-1"
                >
                  &#8595;
                </button>
              </div>
            </div>
          </div>
        </div>
        {filteredBooks.length > 0 ? (
          <div className="">
            <div className="container">
            <div className="row">
              <div className="text-left pt-5 bgcenter col-9 offset-2 pb-3 reviewCount">
                <h1 className="col-12">
                  <strong>{filteredBooks.length} Reviews</strong>
                </h1>
               </div>
              </div>
              <PaginationList
                data={filteredBooks}
                pageSize={10}
                renderItem={(item, key) => (
                  <React.Fragment key={key}>
                    <div className="row">
                      <div className="col-9 offset-2 py-3 bgcenter inner_content">
                        <div className="row">
                          <div className="col-4 col-sm-2 mb-4 col-xl-1 col-lg-1 mr-1">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm px-2"
                            >
                              {item.score} / 5
                            </button>
                          </div>
                          <div className="col-6">
                            {item.channel === "AIRBNB" ? (
                              <img src={AIRBNBlogo} alt="airbnbLogo" />
                            ) : (
                              ""
                            )}
                            {item.channel === "BOOKINGCOM" ? (
                              <img src={bookinglogo} alt="bookingLogo" />
                            ) : (
                              ""
                            )}
                            {item.channel === "HOLIDU" ? (
                              <img src={HOLIDUlogo} alt="holiduLogo" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8 mb-4 lineheightLarge">
                            <strong>
                              {item.headline
                                ? item.headline
                                : "No headline here"}
                            </strong>
                          </div>
                        </div>
                        <div className="row lineheightLarge">
                          <div className="col-12 mb-4">
                            {item.comment ? item.comment : "No comments here"}
                          </div>
                        </div>
                        <div className="row mb-2 lineheightSmall">
                          {item.positiveFeedback ? (
                            <div className="col-8">
                              <img
                                src={thumsup}
                                alt="thumbsup"
                                className="mr-2"
                              />
                              {item.positiveFeedback}
                            </div>
                          ) : (
                            <div className="ml-3">No Positive feedbacks</div>
                          )}
                        </div>
                        <div className="row mb-4 lineheightSmall">
                          {item.negativeFeedback ? (
                            <div className="col-8">
                              <img
                                src={thumsdown}
                                alt="thumbsdown"
                                className="mr-2"
                              />
                              {item.negativeFeedback}
                            </div>
                          ) : (
                            <div className="ml-3">No negative feedbacks</div>
                          )}
                        </div>
                        <div className="row">
                          <div className="col-8 author">
                            <strong>{item.author}</strong>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 text-muted border-bottom pb-4 reviewedby">
                            Reviewed &nbsp;
                            <Moment format="LL">{item.publishedAt}</Moment>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              />
            </div>
          </div>
        ) : (
          <div className="mb-2">
            <h2 className="text-center col-9 offset-2 p-2 bgcenter">
              {message}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ReviewList);
