import React from 'react';

function SearchResult(props) {

    function renderContent() {
        let data = props.searchResult;
        if(!data.countryName) {
            return(<div className="info-text">Please provide valid country code and hit submit button</div>)
        }

        let finalData = <table><tbody>
            <tr>
            <td>Country</td>
            <td>{data.countryName}</td>
        </tr>
        <tr>
            <td>Continent</td>
            <td>{data.continentName}</td>
        </tr>
        <tr>
            <td>Capital</td>
            <td>{data.capital}</td>
        </tr>
        <tr>
            <td>Languages</td>
            <td>{data.languages}</td>
        </tr>
        <tr>
            <td>Population</td>
            <td>{data.population}</td>
        </tr>
        <tr>
            <td>Currancy code</td>
            <td>{data.currencyCode}</td>
        </tr>
        <tr>
            <td>Longitude</td>
            <td>West - {data.west}, East - {data.east}</td>
        </tr>
        <tr>
            <td>Lattitude</td>
            <td>South- {data.south}, North - {data.north}</td>
        </tr>
        <tr>
            <td>Area (in sq.km)</td>
            <td>{data.areaInSqKm}</td>
        </tr>
        </tbody></table>
        return finalData;
    }


    return(
        <div className="search-result">{renderContent()}</div>
    );

}

export default SearchResult;
