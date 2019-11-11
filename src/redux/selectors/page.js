import React from "react";
import ItemResultsPage, {ITEM_RESULTS_PAGE} from "../../pages/item-results";
import AccountSummaryPage, {ACCOUNT_SUMMARY_PAGE} from "../../pages/account-summary";
import CollectionPage, {COLLECTION_PAGE} from "../../pages/collection";
import ItemDetailPage, {ITEM_DETAIL_PAGE} from "../../pages/item-detail";
import DefaultPage from "../../pages/default";

const selectPage = ({pageName}) => {
  switch(pageName){
    case ACCOUNT_SUMMARY_PAGE:
      return <AccountSummaryPage/>;
    case COLLECTION_PAGE:
      return <CollectionPage/>;
    case ITEM_RESULTS_PAGE:
      return <DefaultPage/>;
    case ITEM_DETAIL_PAGE:
      return <ItemDetailPage/>;
    default:
      return <ItemResultsPage/>;
  }
};

export default selectPage;
