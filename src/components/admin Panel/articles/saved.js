import { faEdit, faPenToSquare, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeArticle } from "../../redux/reducers/ArticlesSlice.";
import Pagination from "../../pagination/pagination";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
function PublishedArticles(){

  const articles = useSelector(state=>state.articles)
  const PublishedArticles = articles.filter(article=>article.status === true);
  console.log(articles)
  const dispatch = useDispatch()

  // useEffect(()=>{
  //     dispatch(fetchArticles())
  // }
  // },[])
  const date =moment()
    const [isMobile , setIsMobile] = useState(false)
  const [availableWidth ,setAvailableWidth ] = useState(window.innerWidth)
  const handleMobileView = useCallback(() => {
    console.log(availableWidth,isMobile);
    if (availableWidth <= 778) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [availableWidth]);

  useEffect(() => {
    const handleResize = () => {
      setAvailableWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleMobileView();
  }, [handleMobileView]);
  
    return(
        <>
        <div class="article-sec  ">
          {
            isMobile?"":<Link to="/adminPanel/addarticles" >
            <button className="btn color-yellow ps-4 m-2 d-block pe-4 p-2 ms-auto" style={{transform:'translateY(-50px)',border:"1px solid #bf9b30"}}> Create new article</button>
            </Link>
          }
              {
                isMobile?'':<div class="article-search d-lg-flex justify-content-lg-between">
                <h4 className="text-light">Articles</h4>
                <div class="search-div">
                  <input type="text" placeholder="Search For Jobs" style={{padding:"5px",borderRadius:"5px"}}/>
                  <i class="fas fa-search"></i>
                </div>
              </div>
              }
              


                {isMobile?(<div class="row m-0 mt-5 col-12" id="items" >
                    {PublishedArticles?.map((article,index)=>(
                      <div class="col-12 text-light  " key={index} id="item" >
                      <button className={article.status?"table_btn publish_btn":"bg-secondary table_btn text-light"}>
                      {article.status ? "published" : "draft"}
                      </button>                          <h3>Title</h3>
                          <p>{article.articleTitle}</p>
                          <div class="d-flex  justify-content-between">
                              <div>
                                  <h3>Category </h3>
                                  <p>{article.category}</p>
                              </div>
                              <div>
                              { 
                              moment(article.publishingDate, 'YYYY-MM-DD').format('D MMMM YYYY')
                              }<br/>{""}
                              </div>
                          </div>
                          <div class="icons2 d-flex justify-content-end gap-2">
                            <FontAwesomeIcon icon={faEdit} className="table-icon"/>
                            <FontAwesomeIcon icon={faTrash} onClick={()=>dispatch(removeArticle(article))} className="table-icon"/>
                          </div>
                      </div>))}
                    </div>)
                  
                :  <div class="article-content">
                <table class="  table table-borderless text-light mx-auto table-responsive-sm    ">
                  <thead className="m-3">
                    <tr>
                    <th class="col">Title</th>
                    <th class="col">Category</th>
                    <th class="col">Status</th>
                    <th class="col">Date & Time</th>
                    <th class="col"></th>
                </tr>
                  </thead>
                {PublishedArticles?.map((article,index)=>(
                  <tr key={index}>
                    <td>{article.articleTitle}</td>
                    <td>{article.category}</td>
                    <td><button className={article.status?"":"bg-secondary text-light"}>
                      {article.status ? "published" : "draft"}
                      </button></td>
                    <td>{ 
                    moment(article.publishingDate, 'YYYY-MM-DD').format('D MMMM YYYY')
                    }<br/>{""}
                    </td>
                    <td>
                    <Link href="">
                      <FontAwesomeIcon icon={faPenToSquare} className='color-yellow' />
                    </Link> 
                    <Link href="" onClick={()=>dispatch(removeArticle(article))}>
                      <FontAwesomeIcon icon={faTrashCan} className='color-yellow' />
                    </Link>
                    </td>
                  </tr>))}
                </table>
                </div>
                }

                {isMobile?<a class="btn row_btn col-12" href="#" role="button">Create New Article</a>
                  :""}
            
            {/* <Pagination/> */}
              
            </div>
        </>
    )
}
export default PublishedArticles;