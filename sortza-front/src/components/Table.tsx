import { ITable } from "../interface/ITable";
import "../style/table.scss"
const Table = ({headings} : ITable) => {
    return(
    <div className="table-container">
        <table className="table-container__table">
            <thead>
            <tr className="table-container__tr">
                {headings.map((heading) => 
                    <th className="table-container__th">{heading}</th>
                )}
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
            </tr>
            </tbody>

        </table>
    </div>
    )
}

export default Table;