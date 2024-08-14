function PaymentApi(){
    const Pay = () => {
        var options = {
          key: "rzp_test_KfkSVTMrjRudas",
          key_secret: "WkTAxsYbM61XV2zLioGlRphd",
          currency: "INR",
          name: "STARTUP_PROJECTS",
          description: "for testing purpose",
          handler: function (response) {
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name: "ElectroZone",
            email: "admin@gmail.com",
            contact: "7904425033",
          },
          notes: {
            address: "Razorpay Corporate office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }
    return <div>
        <button className="btn btn-success col-12" onClick={Pay}>
            Proceed to Pay
        </button>
    </div>
}

export default PaymentApi