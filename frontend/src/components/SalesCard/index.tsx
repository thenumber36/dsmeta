import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show900">ID</th>
                            <th className="show536">Data</th>
                            <th>Vendedor</th>
                            <th className="show900">Visitas</th>
                            <th className="show900">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show900">#369</td>
                            <td className="show536">05/09/2022</td>
                            <td>Anakin</td>
                            <td className="show900">50</td>
                            <td className="show900">13</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show900">#369</td>
                            <td className="show536">05/09/2022</td>
                            <td>Anakin</td>
                            <td className="show900">50</td>
                            <td className="show900">13</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show900">#369</td>
                            <td className="show536">05/09/2022</td>
                            <td>Anakin</td>
                            <td className="show900">50</td>
                            <td className="show900">13</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard