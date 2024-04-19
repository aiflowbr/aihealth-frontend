<template>
    <div>
        <v-dialog max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn prepend-icon="mdi-plus" v-bind="activatorProps" color="surface-variant" class="mr-2"
                    text="New"></v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card title="New DICOM source">
                    <v-card-text>
                        In development...
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Save" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>