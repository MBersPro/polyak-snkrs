import React from "react";
import "./CatalogHead.css";
const CatalogHead = ({ setFilter }) => {
  const onChangeFilter = (e) => {
    const id = e.target.id;
    setFilter(id);
  };

  return (
    <div className="catalogHead_container">
      <div className="catalogHead_titleContainer">
        <span className="catalogHead_titleBack">КАТАЛОГ</span>
        <h2 className="catalogHead_title">КАТАЛОГ</h2>
      </div>

      <nav class="catalogHead_menu">
        <ul className="catalogHead_menu_list">
          <li className="catalogHead_menu_element_list">
            <p className="catalogHead_menu_brand">Yeezy</p>
            <div className="catalogHead_dropdown_list">
              <ul className="catalogHead_dropdown_list_background">
                <li
                  className="catalogHead_sub_menu_link"
                  id="Yeezy"
                  onClick={onChangeFilter}
                >
                  Все Yeezy
                </li>
                <li
                  className="catalogHead_sub_menu_link"
                  id="750"
                  onClick={onChangeFilter}
                >
                  750
                </li>
                <li id="300">
                  <a href="" className="catalogHead_sub_menu_link">
                    300
                  </a>
                </li>
                <li id="250">
                  <a href="" className="catalogHead_sub_menu_link">
                    250
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="catalogHead_menu_element_list">
            <p className="catalogHead_menu_brand">Jordan</p>
            <div className="catalogHead_dropdown_list">
              <ul className="catalogHead_dropdown_list_background">
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    Jordan 1 Low
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    Mid
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    High
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    Jordan 4
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="catalogHead_menu_element_list">
            <p className="catalogHead_menu_brand">Nike</p>
            <div className="catalogHead_dropdown_list">
              <ul className="catalogHead_dropdown_list_background">
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    750
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    300
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    250
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="catalogHead_menu_element_list">
            <p className="catalogHead_menu_brand">Kids</p>
            <div className="catalogHead_dropdown_list">
              <ul className="catalogHead_dropdown_list_background">
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    750
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    300
                  </a>
                </li>
                <li>
                  <a href="" className="catalogHead_sub_menu_link">
                    250
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CatalogHead;
