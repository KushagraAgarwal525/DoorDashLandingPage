function OrderProcess() {
    return (
        <div className="order-process-container">
            <div className="order-process-catchy-title">
                The Magical Process
            </div>
            <div className="order-processes">
                <div className="order-process">
                    <div className="order-process-graphic" data-step="1"></div>
                    <div className="order-process-title">
                        Place Order on App/Website
                    </div>
                </div>
                <div className="order-process">
                    <div className="order-process-graphic" data-step="2"></div>
                    <div className="order-process-title">
                        Restaurant accepts and prepares order while a delivery person heads there to collect it
                    </div>
                </div>
                <div className="order-process">
                    <div className="order-process-graphic" data-step="3"></div>
                    <div className="order-process-title">
                        Order is delivered at your doorstep
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProcess;