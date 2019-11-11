import React from 'react';
import Item from "../../components/item";
import {PageBody, PageContainer} from "../default";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const ITEM_RESULTS_PAGE = "ITEM_RESULTS_PAGE";

const ItemResultsPage = ({items, mode}) => {
  return (
    <PageBody>
      <PageContainer>
        {items.map(i =>
          <Item
            key={i.set_num}
            name={i.name}
            num_parts={i.num_parts}
            set_img_url={i.set_img_url}
            set_num={i.set_num}
            year={i.year}
            mode={mode}
          />
        )}
      </PageContainer>
    </PageBody>
  );
};

ItemResultsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    set_num: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
    theme_id: PropTypes.number,
    num_parts: PropTypes.number,
    set_img_url: PropTypes.string,
    set_url: PropTypes.string,
    last_modified_dt: PropTypes.string
  })),
  mode: PropTypes.string
};

const mapStateToProps = (state) => ({
  items: state.items,
  mode: state.mode
});

export default connect(
  mapStateToProps
)(ItemResultsPage);
