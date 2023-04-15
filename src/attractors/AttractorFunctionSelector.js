import {sprottLinzBGenerator} from "./generators/_20SprottLinzBGenerator";
import {threeCellsCNNGenerator} from "./generators/_01ThreeCellsCNNGenerator";
import {aizawaGenerator} from "./generators/_02AizawaGenerator";
import {arneodoGenerator} from "./generators/_03ArneodoGenerator";
import {useState} from "react";
import {boualiGenerator} from "./generators/_04BoualiGenerator";
import {burkeShawGenerator} from "./generators/_05BurkeShawGenerator";
import {chenCelikovskyGenerator} from "./generators/_06ChenCelikovskyGenerator";
import {chenLeeGenerator} from "./generators/_07ChenLeeGenerator";
import {dequanLiGenerator} from "./generators/_08DequanLi";
import {financeGenerator} from "./generators/_09FinanceGenerator";
import {genesioTesiGenerator} from "./generators/_10GensioTesiGenerator";
import {hadleyGenerator} from "./generators/_11HadleyGenerator";
import {halvorsenGenerator} from "./generators/_12HalvorsenGenerator";
import {newtonLeipnikGenerator} from "./generators/_13NewtonLeipnikGenerator";
import {noseHooverGenerator} from "./generators/_14NoseHooverGenerator";
import {rayleighBenardGenerator} from "./generators/_15RayleighBenardGenerator";
import {rucklidgeGenerator} from "./generators/_16RucklidgeGenerator";
import {shimizuMoriokaGenerator} from "./generators/_18ShimizuMoriokaGenerator";
import {sprottLinzAGenerator} from "./generators/_19SprottLinzAGenerator";
import {sprottLinzCGenerator} from "./generators/_21SprottLinzCGenerator";
import {sprottLinzDGenerator} from "./generators/_22SprottLinzDGenerator";
import {sprottLinzEGenerator} from "./generators/_23SprottLinzEGenerator";
import {sprottLinzFGenerator} from "./generators/_24SprottLinzFGenerator";
import {sprottLinzGGenerator} from "./generators/_25SprottLinzGGenerator";
import {sprottLinzHGenerator} from "./generators/_26SprottLinzHGenerator";
import {sprottLinzIGenerator} from "./generators/_27SprottLinzIGenerator";
import {sprottLinzJGenerator} from "./generators/_28SprottLinzJGenerator";
import {sprottLinzKGenerator} from "./generators/_29SprottLinzKGenerator";
import {sprottLinzLGenerator} from "./generators/_30SprottLinzLGenerator";
import {sprottLinzMGenerator} from "./generators/_31SprottLinzMGenerator";
import {sprottLinzNGenerator} from "./generators/_32SprottLinzNGenerator";
import {sprottLinzOGenerator} from "./generators/_33SprottLinzOGenerator";
import {sprottLinzPGenerator} from "./generators/_34SprottLinzPGenerator";
import {sprottLinzQGenerator} from "./generators/_35SprottLinzQGenerator";
import {sprottLinzRGenerator} from "./generators/_36SprottLinzRGenerator";
import {sprottLinzSGenerator} from "./generators/_37SprottLinzSGenerator";
import {thomasGenerator} from "./generators/_40ThomasGenerator";
import {tsucs1Generator} from "./generators/_41TSUCS1Generator";
import {tsucs2Generator} from "./generators/_42TSUCS2Generator";
import {hindmarshRoseGenerator} from "./generators/_43HindmarshRoseGenerator";
import {liuChenGenerator} from "./generators/_45LiuChenGenerator";
import {multiChua2Generator} from "./generators/_46MultiChua2Generator";
import {robinsonGenerator} from "./generators/_47RobinsonGenerator";
import {chuaCubicGenerator} from "./generators/_48ChuaCubicGenerator";
import {actGenerator} from "./generators/_49ACTGenerator";
import {dadrasGenerator} from "./generators/_50DadrasGenerator";
import {lorenzMod1Generator} from "./generators/_51LorenzMod1Generator";
import {lorenzMod2Generator} from "./generators/_51LorenzMod2Generator";
import {luChenGenerator} from "./generators/_52LuChenGenerator";
import {qi3dGenerator} from "./generators/_53Qi3DGenerator";
import {qiChenGenerator} from "./generators/_54QiChenGenerator";
import {wangGenerator} from "./generators/_55WangGenerator";
import {wimolBanlueGenerator} from "./generators/_56WimolBanlueGenerator";
import {yuWangGenerator} from "./generators/_57YuWangGenerator";
import {xingYunGenerator} from "./generators/_58XingYunGenerator";
import {fourWingGenerator} from "./generators/_59FourWingGenerator";
import {anishchenkoAstakhovGenerator} from "./generators/_60AnishchenkoAstakhovGenerator";
import {coulletGenerator} from "./generators/_61CoulletGenerator";
import {wangSunGenerator} from "./generators/_62WangSunGenerator";
import {muthuswamyChuaGenerator} from "./generators/_63MuthuswamyChuaGenerator";
import {lorenzGenerator} from "./generators/_00Lorenz";

const attractorGeneratorDictionary = {
    "Three Cells CNN": threeCellsCNNGenerator,
    "Aizawa": aizawaGenerator,
    "Arneodo": arneodoGenerator,
    "Bouali": boualiGenerator,
    "Burke Shaw": burkeShawGenerator,
    "Chen-Celikovsky": chenCelikovskyGenerator,
    "Chen Lee": chenLeeGenerator,
    "Dequan Li": dequanLiGenerator,
    "Finance": financeGenerator,
    "Genesio-Tesi": genesioTesiGenerator,
    "Hadley": hadleyGenerator,
    "Halvorsen": halvorsenGenerator,
    "Newton-Leipnik": newtonLeipnikGenerator,
    "Nose Hoover": noseHooverGenerator,
    "Rayleigh Benard": rayleighBenardGenerator,
    "Rucklidge": rucklidgeGenerator,
    "Shimizu-Morioka": shimizuMoriokaGenerator,
    "Sprott-Linz A": sprottLinzAGenerator,
    "Sprott Linz B": sprottLinzBGenerator,
    "Sprott Linz C": sprottLinzCGenerator,
    "Sprott Linz D": sprottLinzDGenerator,
    "Sprott Linz E": sprottLinzEGenerator,
    "Sprott Linz F": sprottLinzFGenerator,
    "Sprott Linz G": sprottLinzGGenerator,
    "Sprott Linz H": sprottLinzHGenerator,
    "Sprott Linz I": sprottLinzIGenerator,
    "Sprott Linz J": sprottLinzJGenerator,
    "Sprott Linz K": sprottLinzKGenerator,
    "Sprott Linz L": sprottLinzLGenerator,
    "Sprott Linz M": sprottLinzMGenerator,
    "Sprott Linz N": sprottLinzNGenerator,
    "Sprott Linz O": sprottLinzOGenerator,
    "Sprott Linz P": sprottLinzPGenerator,
    "Sprott Linz Q": sprottLinzQGenerator,
    "Sprott Linz R": sprottLinzRGenerator,
    "Sprott Linz S": sprottLinzSGenerator,
    "Thomas": thomasGenerator,
    "TSUCS 1": tsucs1Generator,
    "TSUCS 2": tsucs2Generator,
    "Hindmarsh Rose": hindmarshRoseGenerator,
    "Liu-Chen": liuChenGenerator,
    "Multi Chua II": multiChua2Generator,
    "Robinson": robinsonGenerator,
    "Chua Cubic": chuaCubicGenerator,
    "ACT": actGenerator,
    "Dadras": dadrasGenerator,
    "Lorenz": lorenzGenerator,
    "Lorenz Mod 1": lorenzMod1Generator,
    "Lorenz Mod 2": lorenzMod2Generator,
    "Lu-Chen": luChenGenerator,
    "Qi-3D": qi3dGenerator,
    "Qi-Chen": qiChenGenerator,
    "Wang": wangGenerator,
    "Wimol-Banlue": wimolBanlueGenerator,
    "Yu-Wang": yuWangGenerator,
    "Xing-Yun": xingYunGenerator,
    "Four-Wing": fourWingGenerator,
    "Anishchenko-Astakhov": anishchenkoAstakhovGenerator,
    "Coullet": coulletGenerator,
    "Wang-Sun": wangSunGenerator,
    "Muthuswamy-Chua": muthuswamyChuaGenerator,
}

export function AttractorFunctionSelector(props) {
    const [selectedGenerator, setSelectedGenerator] = useState("Sprott Linz B");

    function handleFunctionChange(event) {
        props.attractorFunctionCallback(attractorGeneratorDictionary[event.target.value]);
        setSelectedGenerator(event.target.value)
    }

    return (
        <select value={selectedGenerator} onChange={handleFunctionChange}>
            {Object.keys(attractorGeneratorDictionary).map((key) =>
                <option value={key} key={key}>{key}</option>)
            }
        </select>
    )
}
