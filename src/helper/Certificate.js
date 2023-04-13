import { jsPDF } from "jspdf";
import timg from './TestImg'


function DownloadSample(imgx, name, nx, ny) {
    var img = new Image()
    img.src = 'https://imgur.com/5toV6lA.jpeg'
    img.onload = () => {
        const [iw, ih] = [img.naturalWidth, img.naturalHeight]

        const doc = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [ih, iw]
        });

        doc.addImage(img, 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
        doc.setFontSize(50);
        doc.text(`${name}`, nx, ny, { align: "center" })

        // doc.save('temp.pdf');
        doc.output('dataurlnewwindow');

    }
}


function convertPixels(x, y, imgWidth, imgHeight, newWidth, newHeight) {
    const xScale = newWidth / imgWidth;
    const yScale = newHeight / imgHeight;
    const newX = Math.round(x * xScale);
    const newY = Math.round(y * yScale);
    return [newX, newY];
}

function selectPos(setPos,setImgx) {
    const fileInput = document.getElementById('file2');
    const image = document.getElementById('tempView');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        image.src = reader.result;
        setImgx(image);
    }
    reader.readAsDataURL(file);

    image.addEventListener('click', ({ offsetX: x, offsetY: y }) => {
        document.getElementById('dview').style.visibility = 'visible';

        const [cw, ch] = [image.offsetWidth-1, image.offsetHeight-1]
        const [iw, ih] = [image.naturalWidth, image.naturalHeight]
        const [nx, ny] = convertPixels(x, y, cw, ch, iw, ih)

        setPos({ x: nx, y: ny });
        console.log("BOARD:", cw, ch)
        console.log("NAME:", x, y)
        console.log("CERTIFICATE:", iw, ih)
        console.log("CONVERTED NAME:", ...convertPixels(x, y, cw, ch, iw, ih))
    });
}

const certUtils = { DownloadSample, selectPos }

export default certUtils;