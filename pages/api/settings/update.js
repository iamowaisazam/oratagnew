import {query} from "../../../utils/db";

export default async function handler(req, res) {

    const id = req.query.id;
    console.log(req.query);

    let sql1 = `UPDATE settings SET orabase_id=?, orawan_d=?,led_color=?,led_pattern=?,led_repeat=?,sound_tone=?,sound_pattern=?,sound_repeat=?,low_battery_threshold=?,low_temp_alert=?,high_temp_alert=?,selected_fw_config=? WHERE id='1'`; 
     await query({
         queries: sql1,
         values:[
             req.query.orabase_id,
             req.query.orawan_d,
             req.query.led_color,
             req.query.led_pattern,
             req.query.led_repeat,
             req.query.sound_tone,
             req.query.sound_pattern,
             req.query.sound_repeat,
             req.query.low_battery_threshold,
             req.query.low_temp_alert,
             req.query.high_temp_alert,
             req.query.selected_fw_config,
            ]
        });
  
    return res.status(200).json(null);
}