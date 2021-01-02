import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import {loginReducers} from "./reducers/loginReducers"
import {predictReducers} from "./reducers/predictReducer"
import {listOriginReducer} from './reducers/orginreducers/listoriginreducers'
import {OneOriginReducers} from './reducers/orginreducers/oneoriginreducers'
import {listPetReducer} from './reducers/petreducers/listpetreducers'
import {OnePetReducers} from './reducers/petreducers/onepetreducers'
import {listProductReducer} from './reducers/productreducers/listproductreducers'
import { detailProductReducer } from './reducers/productreducers/detailproductreducer';
import {ListcategoryReducer} from './reducers/categoryreducers/listcategoryreducers';
import {SearchProductReducer} from './reducers/productreducers/searchproductreducers'
import {OneCategoryReducers} from './reducers/categoryreducers/onecategoryreducers'
import {OneBrandReducers } from './reducers/brandreducers/onebrandreducers'
import {CartReducers} from './reducers/cartreducers'
import {categoryblogreducers} from './reducers/blogreducers/categoryblogreducers'
import { AllBlogsReducers } from "./reducers/blogreducers/allblogsreducers"
import  {Blogbycategoryreducers} from "./reducers/blogreducers/blogbycategoryreducers"
import {getListForumsReducer} from "./reducers/forumreducers/getlistforumreducers"
import {getListTopicReducers} from "./reducers/forumreducers/getListTopicReducers"
import {getDetailTopicReducers} from './reducers/forumreducers/getdetailtopicreducers'
import {getListChillReducers} from './reducers/forumreducers/getlistchillreducers'
import {allTopicChillReducer} from './reducers/forumreducers/getalltopicchillreducer'
import {getAllTopicReducer} from './reducers/forumreducers/getalltopicreducer'
import {getDetailBlogReducers} from './reducers/blogreducers/getdetailblogreducers'
import {getListBrandReducers} from './reducers/brandreducers/getlistbrandreducers'
import {userProfileReducers} from './reducers/userreducers/userprofilereducers'
import {getOneForumReducers} from './reducers/forumreducers/getoneforumreducers'
import {listUserReducer} from './reducers/userreducers/listuserreducers'
import {filterProductReducers} from './reducers/filterreducers/filterproductreducers'
import {Error} from './reducers/error/errorRegister'
import {ErrorLogin} from './reducers/error/errorLogin'
const configStore = () =>{
    return createStore(
        combineReducers({
            loginReducers :loginReducers,
            predictReducers :predictReducers,
            listOriginReducer : listOriginReducer,
            OneOriginReducers : OneOriginReducers,
            listPetReducer : listPetReducer,
            OnePetReducers : OnePetReducers,
            listProductReducer : listProductReducer,
            detailProductReducer : detailProductReducer,
            ListcategoryReducer:ListcategoryReducer,
            SearchProductReducer:SearchProductReducer,
            OneCategoryReducers:OneCategoryReducers,
            OneBrandReducers:OneBrandReducers,
            CartReducers : CartReducers,
            categoryblogreducers : categoryblogreducers,
            AllBlogsReducers : AllBlogsReducers,
            Blogbycategoryreducers : Blogbycategoryreducers,
            getListForumsReducer : getListForumsReducer,
            getListTopicReducers : getListTopicReducers,
            getDetailTopicReducers : getDetailTopicReducers,
            getListChillReducers : getListChillReducers,
            allTopicChillReducer : allTopicChillReducer,
            getAllTopicReducer,
            getDetailBlogReducers,
            getListBrandReducers : getListBrandReducers,
            userProfileReducers,
            getOneForumReducers,
            listUserReducer,
            filterProductReducers,
            Error,
            ErrorLogin
        }),
        applyMiddleware(thunk)
    )
}
export {configStore}