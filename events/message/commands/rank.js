const { existsSync } = require('fs');
const { createCanvas, loadImage, registerFont} = require('canvas');

registerFont('./_polices/VarelaRound-Regular.ttf', { family: 'Varela Round' })


const generateImg = async (user, user_exp) => {
    const canvas = createCanvas(430, 150);
    const ctx = canvas.getContext("2d");
    
    const mh = canvas.height / 2;
    const max = user_exp.level == 0 ? 100 : 100 * (user_exp.level / 10 + 1);

    // Fond
    ctx.fillStyle = "#23272a"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cercle & avatar
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(mh, mh, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(mh, mh, 46, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.drawImage(await loadImage(user.displayAvatarURL({ size: 128, format: "png" })), mh - 46, mh - 46, 92, 92);
    ctx.restore();

    // Barre de progresion
    ctx.fillRect(mh + 70, mh - 50, canvas.width - mh - 90, 20);
    ctx.fillStyle = "#666fff"
    ctx.fillRect(mh + 72, mh - 48, user_exp.exp / max * (canvas.width - mh - 94), 16);

    // Nom
    ctx.font = '20px "Varela Round" ';
    ctx.fillStyle = "#fff";
    ctx.fillText(user.tag, mh + 70, mh - 5);

    // Exp & level
    ctx.font = '16px "Varela Round"';
    ctx.fillText("Level:" + user_exp.level, mh + 70, mh + 20);
    ctx.fillText("Experience:" + user_exp.exp, mh + 70, mh + 40);
    

    return canvas.toBuffer();   
};

module.exports = {
    exec: async ({ message, args }) => {
        const member = message.guild.members.cache.get(args[0] && args[0].replace(/\D+/g, "")) || message.member;
        const user_exp = existsSync(`./_database/users/exp/${message.author.id}.json`) ? require(`../../../_database/users/exp/${message.author.id}.json`) : { level: 0, exp: 0 };

        const img = await generateImg(member.user, user_exp)
        if(!img) return message.channel.send("<:error:813061047329488976> An error occured, please try again.")
        message.channel.send({ files: [{attachment: img, name: "rank.png"}] });
    },

    config: {name: "rank", aliases: ["profile", "exp"]}
}



// message.channel.send({
//     embed: {
//         color: "53935",
//         author: { name: `Niveau de ${member.user.tag}`, icon_url: member.user.displayAvatarURL({ size: 2048, dynamic: true, format: "png" }) },
//         fields: [
//             { name: "Niveau", value: user_exp.level, inline: true },
//             { name: "Experience", value: user_exp.exp, inline: true }
//         ]
//     }
// })