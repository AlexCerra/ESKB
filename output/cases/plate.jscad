function combo_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-12,5],[-12,82.9754782]]).appendArc([-7.6083495,87.9383313],{"radius":5,"clockwise":true,"large":false}).appendPoint([17.7952772,91.0523243]).appendArc([20.0029372,91.8835808],{"radius":5,"clockwise":false,"large":false}).appendPoint([36.9767098,103.452547]).appendArc([39.2305178,104.2892428],{"radius":5,"clockwise":true,"large":false}).appendPoint([56.3075243,106.2216409]).appendArc([57.6875103,106.186018],{"radius":5,"clockwise":true,"large":false}).appendPoint([75.9538251,103.1576553]).appendArc([76.0463121,103.1432101],{"radius":5,"clockwise":false,"large":false}).appendPoint([130.5250965,95.1560664]).appendArc([134.7946422,89.9819237],{"radius":5,"clockwise":true,"large":false}).appendPoint([130.1248567,-12.7580181]).appendArc([123.467781,-17.2466007],{"radius":5,"clockwise":true,"large":false}).appendPoint([86.1278959,-4.0844493]).appendArc([82.1287133,-4.3798037],{"radius":5,"clockwise":false,"large":false}).appendPoint([77.6119407,-6.7677812]).appendArc([74.2178617,-7.2344954],{"radius":5,"clockwise":true,"large":false}).appendPoint([38.6006792,0.4700636]).appendArc([37.3857343,0.5806021],{"radius":5,"clockwise":false,"large":false}).appendPoint([19.0788879,0.0024912]).appendArc([18.9210719,0],{"radius":5,"clockwise":true,"large":false}).appendPoint([-7,0]).appendArc([-12,5],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[108,26],[122,26]]).appendPoint([122,40]).appendPoint([108,40]).appendPoint([108,26]).close().innerToCAG()
.union(
    new CSG.Path2D([[88,78],[102,78]]).appendPoint([102,92]).appendPoint([88,92]).appendPoint([88,78]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,59],[102,59]]).appendPoint([102,73]).appendPoint([88,73]).appendPoint([88,59]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,40],[102,40]]).appendPoint([102,54]).appendPoint([88,54]).appendPoint([88,40]).close().innerToCAG()
).union(
    new CSG.Path2D([[88,21],[102,21]]).appendPoint([102,35]).appendPoint([88,35]).appendPoint([88,21]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,80],[83,80]]).appendPoint([83,94]).appendPoint([69,94]).appendPoint([69,80]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,61],[83,61]]).appendPoint([83,75]).appendPoint([69,75]).appendPoint([69,61]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,42],[83,42]]).appendPoint([83,56]).appendPoint([69,56]).appendPoint([69,42]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,23],[83,23]]).appendPoint([83,37]).appendPoint([69,37]).appendPoint([69,23]).close().innerToCAG()
).union(
    new CSG.Path2D([[69,4],[83,4]]).appendPoint([83,18]).appendPoint([69,18]).appendPoint([69,4]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,86],[64,86]]).appendPoint([64,100]).appendPoint([50,100]).appendPoint([50,86]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,67],[64,67]]).appendPoint([64,81]).appendPoint([50,81]).appendPoint([50,67]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,48],[64,48]]).appendPoint([64,62]).appendPoint([50,62]).appendPoint([50,48]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,29],[64,29]]).appendPoint([64,43]).appendPoint([50,43]).appendPoint([50,29]).close().innerToCAG()
).union(
    new CSG.Path2D([[50,10],[64,10]]).appendPoint([64,24]).appendPoint([50,24]).appendPoint([50,10]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,81],[45,81]]).appendPoint([45,95]).appendPoint([31,95]).appendPoint([31,81]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,62],[45,62]]).appendPoint([45,76]).appendPoint([31,76]).appendPoint([31,62]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,43],[45,43]]).appendPoint([45,57]).appendPoint([31,57]).appendPoint([31,43]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,24],[45,24]]).appendPoint([45,38]).appendPoint([31,38]).appendPoint([31,24]).close().innerToCAG()
).union(
    new CSG.Path2D([[31,5],[45,5]]).appendPoint([45,19]).appendPoint([31,19]).appendPoint([31,5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,69],[26,69]]).appendPoint([26,83]).appendPoint([12,83]).appendPoint([12,69]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,50],[26,50]]).appendPoint([26,64]).appendPoint([12,64]).appendPoint([12,50]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,31],[26,31]]).appendPoint([26,45]).appendPoint([12,45]).appendPoint([12,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[12,12],[26,12]]).appendPoint([26,26]).appendPoint([12,26]).appendPoint([12,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,69],[7,69]]).appendPoint([7,83]).appendPoint([-7,83]).appendPoint([-7,69]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,50],[7,50]]).appendPoint([7,64]).appendPoint([-7,64]).appendPoint([-7,50]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,31],[7,31]]).appendPoint([7,45]).appendPoint([-7,45]).appendPoint([-7,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12],[7,12]]).appendPoint([7,26]).appendPoint([-7,26]).appendPoint([-7,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.423623,-3.4134681],[126.7498609,9.9013232]]).appendPoint([113.4350696,14.2275611]).appendPoint([109.1088317,0.9127698]).appendPoint([122.423623,-3.4134681]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.8636362,1.7077903],[102.1784275,-2.6184476]]).appendPoint([106.5046654,10.6963437]).appendPoint([93.1898741,15.0225816]).appendPoint([88.8636362,1.7077903]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = combo_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        