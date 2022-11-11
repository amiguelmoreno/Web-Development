public class ejercicio2 {

    public static void main(String[] args) {
        int numerolf = -4;
        int numeroWhile = 2;
        var season = "verano";


        if (numerolf < 0) {
            System.out.println("El número es negativo");
        }
        if (numerolf > 0) {
            System.out.println("El numero es positivo");
        }
        if (numerolf == 0) {
            System.out.println("El numero es cero");
        }
        while (numeroWhile < 3) {
            System.out.println(numeroWhile);
            numeroWhile++;
        }
        do {
            System.out.println(numeroWhile);
            numeroWhile++;
        } while (numeroWhile <= 3);

        for (int numeroFor = 0; numeroFor <= 3;numeroFor++){
            System.out.println(numeroFor);
        }

        switch (season){
            case "verano":
                System.out.println("Es verano");
                break;
            case "primavera":
                System.out.println("Es primavera");
                break;
            case "invierno":
                System.out.println("Es invierno");
                break;
            case "otoño":
                System.out.println("Es otoño");
                break;
        }
    }
}
