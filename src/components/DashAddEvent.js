import React from 'react'
import { useNavigate } from 'react-router-dom'
import Papa from 'papaparse'
import '../css/DashAddEvent.css'

import userQuery from '../helper/User.js'
import certUtils from '../helper/Certificate.js'
import CSVToJson from './DashAddEventParticipants'


export default function DashAddEvent() {
    const navigate = useNavigate()

    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    const [imgx, setImgx] = React.useState(null);

    const eventref = React.useRef(null);
    const idref = React.useRef(null);
    const nameref = React.useRef(null);

    function makeDownload() {
        certUtils.DownloadSample(imgx.src, "Kartik Sharma", pos.x, pos.y);
    }

    function selectFields() {
        const fileInput = document.getElementById('file1');

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            var res = Papa.parse(reader.result, {
                header: true,
            });
            ShowOpt(res.meta.fields)
            console.log(res)
        }
        reader.readAsText(file);
    }

    function ShowOpt(header) {
        document.getElementsByClassName('cin')[0].style.display = 'grid';
        document.getElementById('inputid').innerHTML = header.map((item) => `<option value="${item}">${item}</option>`);
        document.getElementById('inputname').innerHTML = header.map((item) => `<option value="${item}">${item}</option>`);
    }

    return (
        <div class="add-event">
            <h2 class="subtitle">Add Event</h2>
            <div class="content">
                <form>
                    <div class="grid">
                        <label for="event-name">Event Name
                            <input ref={eventref} type="text" id="firstname" name="firstname" placeholder="ABC Workshop" required />
                        </label>
                    </div>

                    <label for="file1" onChange={() => selectFields()}>Choose Participant List
                        <input type="file" id="file1" accept=".csv, .txt" name="file1" required />
                    </label>

                    <div class="cin">
                        <sub>Select ID Field:</sub>
                        <sub>Select Name Field:</sub>
                        <select ref={idref} id="inputid" required></select>
                        <select ref={nameref} id="inputname" required></select>
                    </div>

                    <label for="file2" onChange={() => certUtils.selectPos(setPos, setImgx)}>Choose Certificate Template
                        <input type="file" id="file2" accept=".png, .jpeg, .jpg" name="file2" required />
                    </label>

                    <sub id="cview">Select Name position: </sub>
                    <sub id="pos">({pos.x},{pos.y})</sub>
                    <sub id="dview" onClick={makeDownload}><a>&nbsp;&nbsp;&nbsp;View sample certificate</a></sub>
                    <img id="tempView" src="" />

                    <label for="date">Date
                        <input type="date" id="date" name="date" required />
                    </label>

                    <button type="submit">CREATE</button>

                </form>
            </div>

        </div>

    )

}