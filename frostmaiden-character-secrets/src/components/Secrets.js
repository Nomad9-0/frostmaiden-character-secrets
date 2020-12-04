import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Secrets.css';

const Secrets = () => {
    const secrets =[
        {"title":"Alagondar Scion", 
            "description1":"Prerequisite: You must be a human, half-elf or half-orc to have this secret. If you don't meet this prerequisite, draw a different card.",
            "description2":"I'm a scion of the Alagondar bloodline and the only known heir to the crown of Neverwinter. If Dagult Neverember, the city's lord regent, learns that I'm alive, he'll send assassins to kill me."},
        {"title":"Doppelganger", 
            "description1":"I'm a shapeshifter. I have none of the traits of the race I'm imitating, but I retain my class features, background and alignment. I have darkvision out to a range of 60 feet. I can use an action to do either of the following at will.",
            "description2":"I can innately cast 'detect thoughts', requiring no components. My spellcasting ability is Intelligence. The spell's Wisdom save DC is 8 + my proficiency bonus + my Intelligence modifier.", 
            "description3":"I can polymorph into any humanoid I have seen or back into my true form. My statistics, other than my size, don't change. Any equipment I'm wearing or carrying isn't transformed. I revert to my true form when I die."},    
        {"title":"Drizzt Fan", 
            "description1":"I once met the famous drow ranger Drizzt Do'Urden! In fact, I have a tattered piece of his famous green cloak and would never think to part with it"},
        {"title":"Elusive Paramour", 
            "description1":"A wealthy pasha in Calimshan has placed a bounty on my head for seducing his favorite concubine. Bounty hunters are scouring the Sword Coast in search of me, but I hope they'll never think to look in Icewind Dale."}, 
        {"title":"Escaped Prisoner", 
            "description1":"I was brought here from another world by spacefaring mind flayers. The ship in which I was imprisoned crashed in the mountains south of Ten Towns. After surviving the crash, I nearly froze to death crossing the tundra to reach Ten Towns. If some friendly trappers hadn't found me, I would have perished. I fear some of my captors also survived the crash and might come looking for me."}, 
        {"title":"Littlest Yeti", 
            "description1":"I was raised by yeti. Although I relied on my ferocious guardians for food and warmth and never quite adapted to the cold, I speak Yeti and have advantage on Charisma checks to influence yeti or improve their attitudes."}, 
        {"title":"Midwinter Child", 
            "description1":"Auril the Frostmaiden has blessed me, for I was born on the Midwinter holiday. I have resistance to cold damage."},   
        {"title":"Old Flame", 
            "description1":"I have a lover in Ten Towns whom I haven't seen in years. At any time outside of combat, I can decide who the lover is by choosing an NPC in Ten Towns that I can see. Once I make this choice, I can't change it. This old flame is friendly and helpful toward me, even if our past is checkered."},    
        {"title":"Orc Stone", 
            "description1":"I saved the life of an orc, who gave me a stone with the symbol of the Many Arrows tribe (a humanoid skill pierced by three arrows) carved into it. The stone is an uncommon magic item that requires attunement, and only I can attune to it.",
            "description2":"As an action, I can use the stone to summon the spirit of an orc warrior, which appears within 30 feet of me. The spirit uses the 'orc war chief' stat block in the Monster Manual and disappears after 10 minutes or when reduced to 0 hit points, The spirit understands any language I speak and obeys my commands. After the stone is used three times, it turns to dust."},   
        {"title":"Owlbear Whisperer", 
            "description1":"Owlbears are predisposed to like me. If I am within 10 feet of an owlbear, I can use an action to make a DC 10 Charisma (Animal Handling) check. On a success, I can change the owlbear's attitude toward me from hostile to indifferent or from indifferent to friendly."}, 
        {"title":"Pirate Cannibal", 
            "description1":"I served aboard 'Dark Duchess', a pirate ship from the city of Luskan. After the vessel got stuck in the ice, everyone but the captain abandoned the vessel and fled to Ten Towns. We got lost in a blizzard along the way. I was the only one who made it, and only by eating me mates. The ship and its treasure are still out there."}, 
        {"title":"Reghed Heir", 
            "description1":"Prerequisite: You must be a human, half-elf or half-orc to have this secret. If you don't meet this prerequisite, draw a different card.",
            "description2":"I am the offspring of Queen Bjornhild Sölvigsdottir, leader of the Tiger Tribe. My mother cast me into the Sea of Moving Ice when I was a young child as a sacrifice to Auril the Frostmaiden. A polar bear pulled me from the water and spared me a freezing death. This bear then transformed into a goliath who bore me safely to Ten Towns. I remember the goliath's name - Oyaminartok - but haven't seen her since. I owe her my life, just as I owe my mother a merciless death."}, 
        {"title":"Reincarnation", 
            "description1":"I died and was brought back to life by a friendly human druid using the 'reincarnate' spell. I have no idea what became of the druid, whose name I don't know. I retain the memories of my previous life, some or all of which was spent in Icewind Dale. (Roll on the table in the spell's description to determine your character's previous race, or choose a race from the table that you like, then flesh out the story of your previous life.)",
            "rolls1":"1-3: I was killed in an avalanche.",
            "rolls2": "4-5: I was murdered by goblins in the mountains after they ambushed my caravan.", 
            "rolls3":"6-8: I got mauled to death by a yeti.", 
            "rolls4":"9-10: A white dragon attacked my caravan, and I was slain by its freezing breath weapon.",
            "rolls5":"11-13: I was pulled into a freezing lake by a knucklehead trout and drowned before I could be rescued.", 
            "rolls6":"14-16: A lottery was recently held in Targos to see who would be sacrificed to the Frostmaiden. I was the unlucky one. I died of exposure after being stripped down and cast into a snowstorm.", 
            "rolls7":"17-18: I was killed in Ten Towns by a lookalike - a doppelganger, I presume.", 
            "rolls8":"19-20: I was killed by a white moose outside Ten Towns."}, 
        {"title":"Ring Hunter", 
            "description1":"I am looking for the knucklehead trout that bit off my father's finger, which had a signet ring on it. To preserve my inheritance, I must retrieve the lost ring."},
        {"title":"Runaway Author", 
            "description1":"I penned a notorious exposé called 'The Hellbent Highborn' which accused several prominent patriars in Baldur's Gate and nobles in Waterdeep of being devil worshipers. Although my accusations were well founded, I made a lot of enemies and was forced to seek refuge in Icewind Dale."},    
        {"title":"Slaad Host", 
            "description1":"A red slaad implanted a pellet-sized egg in me shortly before I started my adventuring career. If I can't get rid of it in the next two months, the egg will gestate inside me, and a slaad tadpole will burst from my chest, killing me. It will then quickly grow into an adult slaad and will kill even more people."}, 
        {"title":"Spy", 
            "description1":"I'm a spy for the Harpers, a secretive organisation that works behind the scenes to thwart tyrants and other evildoers. My mission in Icewind Dale is to safeguard the settlements of Ten Towns while concealing my Harper affiliation. Credible threats to Ten Towns include the Arcane Brotherhood, an organisation of wizard based in Luskan, and the Zhentarim, an expansive shadow network that wants to control trade throughout the North. Both have threatened Ten Towns in the past.",
            "description2":"My only Harper contact in Ten Towns is a human named Beldora, who poses as a homeless woman and spends her days gathering information in Bryn Shander."},   
    ];

    const [secretTitle, setSecretTitle] = useState();
    const [secretDescription1, setSecretDescription1] = useState();
    const [secretDescription2, setSecretDescription2] = useState();
    const [secretDescription3, setSecretDescription3] = useState();
    const [secretRoll1, setSecretRoll1] = useState();
    const [secretRoll2, setSecretRoll2] = useState();
    const [secretRoll3, setSecretRoll3] = useState();
    const [secretRoll4, setSecretRoll4] = useState();
    const [secretRoll5, setSecretRoll5] = useState();
    const [secretRoll6, setSecretRoll6] = useState();
    const [secretRoll7, setSecretRoll7] = useState();
    const [secretRoll8, setSecretRoll8] = useState();

    const getSecret = () => {
        let randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
        setSecretTitle(randomSecret.title);
        setSecretDescription1(randomSecret.description1);
        setSecretDescription2(randomSecret.description2);
        setSecretDescription3(randomSecret.description3);
        setSecretRoll1(randomSecret.rolls1);
        setSecretRoll2(randomSecret.rolls2);
        setSecretRoll3(randomSecret.rolls3);
        setSecretRoll4(randomSecret.rolls4);
        setSecretRoll5(randomSecret.rolls5);
        setSecretRoll6(randomSecret.rolls6);
        setSecretRoll7(randomSecret.rolls7);
        setSecretRoll8(randomSecret.rolls8);
    }

    const handleClick = () => {
        getSecret();
    }

  return (
    <div className="Secrets">
      <button id='randomBtn' onClick={handleClick}>Get a Secret</button>
      <div className="cardsContainer">
        <Card>
            <Card.Body>
                <Card.Title>{secretTitle}</Card.Title>
                <ListGroup>
                    <ListGroup.Item className='description'>{secretDescription1}</ListGroup.Item>
                    <ListGroup.Item className='description'>{secretDescription2}</ListGroup.Item>
                    <ListGroup.Item className='description'>{secretDescription3}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll1}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll2}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll3}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll4}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll5}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll6}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll7}</ListGroup.Item>
                    <ListGroup.Item className='roll'>{secretRoll8}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Secrets;
