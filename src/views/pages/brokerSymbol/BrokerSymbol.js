import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { getBrokerSymbolList } from "../../../redux/submbolgenerator/actions";
import { useSelector, useDispatch } from "react-redux";
import { Digital } from "react-activity";

const BrokerSymbol = (props) => {
  const brokerListState = useSelector((state) => state.brokerListState);
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("angel");

  useEffect(() => {
    dispatch(getBrokerSymbolList());
  }, [dispatch]);

  const [datatableangel, setDatatable] = React.useState({
    columns: [
      {
        label: "IT",
        field: "token",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "token",
        },
      },
      {
        label: "Symbol",
        field: "symbol",
        width: 100,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Lot_size",
        field: "lotsize",
        sort: "asc",
        width: 100,
      },
      {
        label: "Exch_seg",
        field: "exch_seg",
        sort: "asc",
        width: 100,
      },
    ],
  });

  console.log("this:", brokerListState.data);
  return (
    <>
      <div style={{ padding: 25 }}>
        <div style={{ fontSize: 25 }}>Broker Symbol</div>
        <div style={{ marginTop: 30 }}>
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <button
                onClick={() => {
                  setSelected("angel");
                }}
              >
                <div style={{ fontSize: 18 }}>Angel</div>
                <div
                  style={{
                    height: 5,
                    width: 100,
                    backgroundColor: selected == "angel" ? "green" : "grey",
                    marginTop: 15,
                  }}
                ></div>
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          {brokerListState.loading ? (
            <div>
              <Digital />
            </div>
          ) : null}

          {selected == "angel" ? (
            <MDBDataTableV5
              striped
              bordered
              hover
              entriesOptions={[7, 14, 21]}
              entries={7}
              pagesAmount={4}
              data={{
                columns: datatableangel.columns,
                rows: brokerListState.data,
              }}
              searchTop
              searchBottom={false}
            />
          ) : (
            <MDBDataTableV5
              striped
              bordered
              hover
              entriesOptions={[7, 14, 21]}
              entries={7}
              pagesAmount={4}
              data={{ columns: datatableangel.columns }}
              searchTop
              searchBottom={false}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BrokerSymbol;
