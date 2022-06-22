import { ITable } from "../interface/ITable";
import "../style/table.scss"
import LinkTo from "./LinkTo";
const Table = ({ headings, data }: ITable) => {
    return (
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
                    {data?.map((listing) =>
                        <tr>
                            <td>{listing.title}</td>
                            <td>{listing.city}</td>
                            <td>{listing.end.toLocaleString()}</td>
                            <td><LinkTo className="" to="" text="Click here" /></td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default Table;