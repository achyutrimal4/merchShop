import React from "react";
import img1 from "../media/images/about-img.jpg";
import img2 from "../media/images/about-img-2.jpg";
import img3 from "../media/images/about-img-3.jpg";
import FaqMarquee from "../components/FaqMarquee";

function FaqScreen() {
  return (
    <div className="faq-canvas">
      <div className="container">
        <div className="photos">
          <img src={img2} alt="Saman Maharjan" />
          <img src={img1} alt="Saman Maharjan" />
          <img src={img3} alt="Saman Maharjan" />
        </div>

        <FaqMarquee />

        <div className="questions">
          <div className="row-1">
            <div className="col1">
              <p id="topic">Shipping and delivery</p>
            </div>

            <div className="col2">
              <p id="question">
                Where is my order/When will i receive my items?
              </p>
              <div className="answers">
                <p>
                  Please note orders including items from both the old and new
                  collection will ship separately. Keep your eyes peeled for two
                  tracking numbers!
                </p>
                <p>
                  All in stock items are shipped immediately. Once the item is
                  shipped, standard shipping times apply. If your order has
                  items with different estimated shipping dates, your order will
                  only ship once all items are ready.
                </p>
                <p>
                  Once shipped, US shipments (depending on shipping method) will
                  take 2-9 business days and international shipments will take
                  4-20 business days to be delivered.
                </p>

                <p>
                  Orders being shipped to South America, Middle East and Asia
                  may take 1-3 months to be delivered once shipped.
                </p>
              </div>
              <p id="question">What is a pre-order/backordered product? </p>
              <div className="answers">
                <p>
                  A pre-order is designed with the customer in mind, where
                  orders are taken over a period to ensure that you can secure
                  your order before the collection sells out.
                </p>
                <p>
                  A backorder is a product that has been reordered to be
                  manufactured after the existing stock has sold out.
                </p>
              </div>

              <p id="question">Do you ship internationally?</p>
              <div className="answers">
                <p>
                  We ship to most countries around the world with the exception
                  of limited countries based on international agreements and
                  USPS restrictions. If we are unable to ship to your country,
                  you will be notified at checkout and your purchase will be
                  blocked.
                </p>
              </div>

              <p id="question">How much does shipping cost?</p>
              <div className="answers">
                <p>
                  Shipping costs are displayed on the checkout page and are
                  calculated based on weight, shipping method and destination.
                </p>
              </div>

              <p id="question">
                Will I have to pay taxes/import duties in my country?
              </p>
              <div className="answers">
                <p>
                  Import duty is a tax collected on imports and some exports by
                  a country's customs authorities. A good's value will usually
                  dictate the import duty.
                </p>
                <p>
                  While the cost of shipment for your package is included in
                  your order total, you may be subject to taxes/import duties
                  for your package upon arrival to your destination country.
                  Kindly note, we are not able to cover additional costs in
                  order for you to receive your package once it arrives at
                  customs.
                </p>

                <p>
                  We do everything on our end to declare customs (value, items,
                  weight, material) to ensure that there is no added customs
                  charge when your order arrives to your country. Most of our
                  packages ship without any additional fees or charges, but each
                  country has a unique customs process and occasionally random
                  packages will be pulled for inspection. We cannot control if
                  your order gets pulled and there are additional fees during
                  the customs process in your country. We do our due diligence
                  on our end to prevent this from happening, but unfortunately
                  we are not in control of each order and it is up to your
                  country's postal service how your order is handled. We
                  recommend speaking with your local post office if you have any
                  specific questions regarding your country's customs process.
                </p>
              </div>

              <p id="question">
                Can I update my shipping address after I have ordered?{" "}
              </p>
              <div className="answers">
                <p>
                  If you have incorrectly formatted or entered your address,
                  please contact customer support immediately with your order
                  number and correct shipping address. If you fail to
                  communicate a shipping address change before your order is
                  shipped you will have to contact the courier to reroute your
                  order. ShopMrBeast is not responsible for shipment to an
                  incorrect address if we are not provided the information prior
                  to dispatch.
                </p>
                <p>
                  If your package fails to be delivered due to an insufficient
                  delivery address the goods will be returned to us. Please
                  contact us if this occurs and we will organize a reshipment to
                  an updated shipping address.
                </p>
              </div>

              <p id="question">How do I track my order? </p>
              <div className="answers">
                <p>
                  Tracking information will be sent to the contact information
                  you provide us. This will be sent via email/sms when your
                  order has been fulfilled. For specific tracking details or if
                  your delivery is late, you can contact the carrier directly
                  for the most up-to-date information, including any carrier or
                  regional delays.
                </p>
              </div>

              <p id="question">What is a pre order?</p>
              <div className="answers">
                <p>
                  A pre-order is designed with the customer in mind, where
                  orders are taken over a period to ensure that you can secure
                  your order before the collection sells out.
                </p>
              </div>
            </div>
          </div>

          <div className="row-1 row-2">
            <div className="col1">
              <p id="topic">Exchanges, returns and refunds</p>
            </div>

            <div className="col2">
              <p id="question">
                Where is my order/When will i receive my items?
              </p>
              <div className="answers">
                <p>
                  Please note orders including items from both the old and new
                  collection will ship separately. Keep your eyes peeled for two
                  tracking numbers!
                </p>
                <p>
                  All in stock items are shipped immediately. Once the item is
                  shipped, standard shipping times apply. If your order has
                  items with different estimated shipping dates, your order will
                  only ship once all items are ready.
                </p>
                <p>
                  Once shipped, US shipments (depending on shipping method) will
                  take 2-9 business days and international shipments will take
                  4-20 business days to be delivered.
                </p>

                <p>
                  Orders being shipped to South America, Middle East and Asia
                  may take 1-3 months to be delivered once shipped.
                </p>
              </div>
              <p id="question">What is a pre-order/backordered product? </p>
              <div className="answers">
                <p>
                  A pre-order is designed with the customer in mind, where
                  orders are taken over a period to ensure that you can secure
                  your order before the collection sells out.
                </p>
                <p>
                  A backorder is a product that has been reordered to be
                  manufactured after the existing stock has sold out.
                </p>
              </div>

              <p id="question">Do you ship internationally?</p>
              <div className="answers">
                <p>
                  We ship to most countries around the world with the exception
                  of limited countries based on international agreements and
                  USPS restrictions. If we are unable to ship to your country,
                  you will be notified at checkout and your purchase will be
                  blocked.
                </p>
              </div>

              <p id="question">Do you ship internationally?</p>
              <div className="answers">
                <p>
                  We ship to most countries around the world with the exception
                  of limited countries based on international agreements and
                  USPS restrictions. If we are unable to ship to your country,
                  you will be notified at checkout and your purchase will be
                  blocked.
                </p>
              </div>
            </div>
          </div>

          {/* <div id="animated-dash">

          </div> */}
          
        </div>
      </div>
    </div>
  );
}
export default FaqScreen;
