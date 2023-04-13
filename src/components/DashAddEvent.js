import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/DashAddEvent.css'

import userQuery from '../helper/User.js'


function showView(e) {
    // e.preventDefault();
    // document.getElementById('tempView').style.visibility = 'visible';
    // selectPos()
}


function selectPos() {

  const fileInput = document.getElementById('file2');
  const image = document.getElementById('tempView');

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = () => image.src = reader.result;
    reader.readAsDataURL(file);
  });

  image.addEventListener('click', ({ offsetX: x, offsetY: y }) => console.log(`X Coordinate: ${x}, Y Coordinate: ${y}`));

}


export default function DashAddEvent() {
    const navigate = useNavigate()

    React.useEffect(() => {
        selectPos();
        document.getElementById('cview').style.visibility = 'visible';
    }, []);

    return (
        <div class="add-event">
            <h2 class="subtitle">Add Event</h2>
            <div class="content">
                <form>
                    <div class="grid">
                        <label for="event-name">
                            Event Name
                            <input type="text" id="firstname" name="firstname" placeholder="ABC Workshop" required />
                        </label>
                    </div>

                    <label for="file1">Choose Participant List
                        <input type="file" id="file1" accept=".csv, .txt" name="file1" />
                    </label>

                    <label for="file2">Choose Certificate Template
                        <input type="file" id="file2" accept=".png, .jpeg" name="file2" />
                    </label>

                    <sub id="cview">Select Name position: </sub>
                    <sub id="pos">(0,0)</sub>
                    <img id="tempView" src="" />

                    <label for="date">Date
                        <input type="date" id="date" name="date" />
                    </label>

                    <button type="submit">CREATE</button>

                </form>
            </div>

        </div>

    )

}