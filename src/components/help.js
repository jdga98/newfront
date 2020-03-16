import React from "react";
import Nav from "../components/Nav";
import NavCategory from "../components/NavCategory";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
      <Nav />
      <NavCategory />
      <div className="help_container">
        <div className="help_navegation">
          <div className="help_navegation_menu">
            <strong>1. Comprar</strong>
            <li>1.1. Comprar un producto.</li>
            <ul>
              <li>1.1.1. Como elegir a que vendedor comprarle.</li>
              <li>1.1.2. Como protegemos a los compradores.</li>
              <li>1.1.3. Envíos.</li>
            </ul>
            <li>1.2. Opciones.</li>
            <li>1.3. La pregunta que hice fue eliminada.</li>
          </div>
          <div class="help_navegation_menu">
            {" "}
            <strong>1. Mi cuenta</strong>
            <li>2.1. Registrarme como empresa.</li>
            <li>2.2. Problema de seguridad.</li>
            <ul>
              <li>
                2.2.1. Cambie mi dispositivo en donde recibía mi código de
                seguridad.
              </li>
              <li>2.2.2. Mi cuenta no esta protegida.</li>
              <li>2.2.3 Me enviaron un correo falso.</li>
              <li>2.3.4 ¿Como recuperar mi cuenta?</li>
            </ul>
            <li>2.3. ¿Como recuperar mi cuenta?</li>
          </div>
        </div>
        <div className="help_description">
          <div className="help_description_info">
            <h2 style={{ color: "#cf0a2c", marginBottom: "30px" }}>Comprar.</h2>
            <h3>Comprar un producto</h3>
            <p>
              -En Kiero tu compra esta protegida, si el producto no es lo que
              esperabas te devolveremos tu dinero de forma rápida y segura.
            </p>
            <p>-Puedes elegir entre los siguientes métodos de pagos: </p>
          </div>
          <div className="help_description_payments">
            <table class="help_description_payments_table">
              <tr>
                <th>Tarjeta de crédito</th>
                <td>El pago se acredita instantáneamente</td>
                <td>Hasta 48 cuotas*</td>
              </tr>
              <tr>
                <th>
                  Transferencia bancaria con PSE Débito con cuentas corriente y
                  ahorro.
                </th>
                <td>El pago se acredita instantáneamente</td>
                <td>Por medio de 1 pago</td>
              </tr>
              <tr>
                <th>
                  Efecty Te facilitamos un número de cuenta para canceles en tu
                  punto efecty más cercano
                </th>
                <td>El pago se acredita instantáneamente</td>
                <td>Por medio de 1 pago</td>
              </tr>
            </table>
          </div>
          <div className='help_description_payments'>
            <p>
              - La cantidad de cuotas e intereses dependerá de la entidad
              bancaria.
            </p>
            <p>
              - En algunas publicaciones también podrás escoger como realizar el
              pago directamente con el vendedor. Si eliges pagar de esta forma,
              te recomendamos:
            </p>
            <p>
              - Al finalizar la compra podrás obtener tu cupón. No pagues
              cupones enviados por el vendedor.
            </p>
            <p>- Conserva los comprobantes de pago.</p>
            <p>
              - Evita utilizar los servicios por medio de transferencias de
              dinero en el cual no se permita verificar la identidad de su
              contraparte.
            </p>
            <p>
              - Garantiza de que el titular de la cuenta bancaria a la cual
              vayas a depositar tu pago sean los datos del vendedor.
            </p>
          </div>
          <div className="help_description_payments">
            <h3>
              <strong>1.1.1 Como elegir a que vendedor comprarle.</strong>
            </h3>
            <p>
              Si quieres comprar un productos y tienes dudas, ten en cuenta los
              siguientes aspectos:
            </p>
            <h3>
              <li>Revisar la efectividad del vendedor</li>
            </h3>
            <p>
              -Observa el porcentaje que tiene el vendedor.
              <br />
              La barra de porcentaje indica que al 25% el vendedor no ha
              cumplido o publicado ninguna venta. Aquellos que llegan al 100% es
              por que son vendedores buenos y seguros.
              <br />
              Si aún no te sientes seguro de tu compra, te recomendamos que leas
              los comentarios de personas que ya hayan comprado algún producto.{" "}
            </p>
            <h3>
              <li>Verifica la publicación antes de realizar tu compra.</li>
            </h3>
            <p>
              {" "}
              - Observa detalladamente los datos de la publicación: Lee con
              atención la descripción y las condiciones del vendedor, y también
              visualiza las imágenes para que te sientas seguro que el producto
              que deseas adquirir sea el correcto.
              <br />- Si el producto es totalmente nuevo, asegúrate de que
              cuente con garantía. Ya que si deseas por alguna razón devolver el
              producto, este tenga su respectivo cambio o la devolución de su
              dinero.{" "}
            </p>
            <h3>
              <li>¿Aún tienes dudas?</li>
            </h3>
            <p>
              Si después de leer toda la información no te sientes seguro o
              tienes alguna duda de realizar tu compra. Te recomendamos
              contactar al vendedor, el te ayudará.
            </p>
            <h3>
              <strong>1.1.2 Como protegemos a los compradores.</strong>
            </h3>
            <h3>
              <li>Siéntete tranquilo con tus compras.</li>
            </h3>
            <p>
              - Kiero pago cuida de tu bolsillo, ya que el dinero no se es
              entregado al vendedor hasta que el comprador reciba su producto.
              <br />- Cuando ya hayas pagado tu producto el dinero puede ser
              visto por el vendedor, al recibir el producto el comprador deberá
              de confirmar su entrega para que así el vendedor pueda recibir su
              dinero.
            </p>
            <h3>
              <li>Tienes nuestro apoyo.</li>
            </h3>
            <p>
              En Kiero.co no tendrás ningún problema al comprar, si llegara a
              presentarse algún problema con tu compra con gusto te ayudaremos a
              solucionarlo.
              <br />
              <br />
              Lo primero será abrir un reclamo al vendedor una vez que se
              presente algún problema con tu compra. Recuerda especificar con
              detalles el problema para poder ayudarte y resolverlo lo antes
              posible.
              <br />
              Si tus medios de pagos son por medio de Kiero pago y tienes algún
              problema con tu compra. Realizaremos la devolución de todo tu
              dinero. En Kiero tu dinero está siempre seguro.
            </p>
            <h3>
              <strong>1.1.3 Envíos.</strong>
            </h3>
            <h3>
              <li>Envíos gratis por Kiero Envíos.</li>
            </h3>
            <p>
              Cada publicación especifica la forma de envío y el costo del
              producto. Adquirirás este beneficios de envíos gratis cuando veas
              el camión rojo de Kiero Envíos.
            </p>
            <h3>
              <li>Consulta con el vendedor.</li>
            </h3>
            <p>
              Si no aparece el camión rojo de Kiero Envíos, necesariamente debes
              de consultar con el vendedor como se llevara acabo la entrega de
              tu producto.
            </p>
            <h3>
              <strong>1.2 Opciones.</strong>
            </h3>
            <p>
              Cuando recibas el producto, puedes agregar un comentario de como
              fue tu experiencia con el vendedor.{" "}
            </p>
            <h3>1.3 La pregunta que hice fue eliminada.</h3>
            <p>
              Las razones por la cual tus preguntas son eliminas:
              <br />- Por que el vendedor te haya bloqueado.No te preocupes,
              igual puedes visitar otros vendedores y ver sus publicaciones. Ya
              si tu cuenta ha sido desactivada y deseas activarla,
              necesariamente debes de contactarnos.
            </p>
          </div>
        </div>
      </div>

      <div style={{ bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default Help;
